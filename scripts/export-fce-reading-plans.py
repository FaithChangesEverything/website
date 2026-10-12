"""Extract the FCE approved DOCX masters into website-ready JSON.

Requires python-docx. Run locally; this is not part of the Next.js build.
"""
import argparse, re, json, pathlib, collections
from docx import Document


def norm(v):
  return re.sub(r'\s+', ' ', v.strip())
def slugify(s):
  s=s.replace('’', '').replace("'",'')
  return re.sub('-+', '-', re.sub(r'[^a-z0-9]+','-',s.lower())).strip('-')
def parse_keyverse(text):
  assert text.startswith('Key Verse:'),text
  t=norm(text[len('Key Verse:'):]); m=re.match(r'[“\"](.*?)[”\"]\s+(.*?)\s*(?:\(KJV(?:\s*[—-]\s*excerpt)?\))?$',t)
  if not m: raise ValueError('Unparseable key verse '+repr(t))
  verse, citation = m.groups(); citation=citation.strip()
  citation=re.sub(r'\s*\(KJV.*?\)\s*$', '', citation).strip()
  if not re.match(r'^(?:[1-3] )?[A-Za-z][A-Za-z ]*\s+\d+:\d+(?:[-–]\d+)?$',citation):raise ValueError('Odd reference '+repr(citation))
  return verse, citation, 'excerpt' in t.split('”')[-1].lower()

def extract_one(days,source_path):
  fname=source_path.name
  doc=Document(source_path); plans=[]; current=None; day=None; active_field=None; contextual_heading=None
  for index,paragraph in enumerate(doc.paragraphs):
    raw=paragraph.text
    txt=norm(raw)
    if not txt:continue
    style=paragraph.style.name
    if days==7 and style=='Title':
      if current: plans.append(current)
      current={'id':'','title':txt,'subtitle':'','days':7,'sourceFile':fname,'purpose':[],'closing':None,'lessons':[]}
      day=None;contextual_heading=None;continue
    if days==10 and style=='Heading 1' and not txt.startswith('Day '):
      if current:plans.append(current)
      label=re.sub(r'\s*:\s*10-Day Bible Reading Plan$', '', txt)
      label=re.sub(r'\s*—\s*A 10-Day Bible Reading Plan$', '', label)
      current={'id':'','title':label,'subtitle':'','days':10,'sourceFile':fname,'purpose':[],'closing':None,'lessons':[]}
      day=None;contextual_heading=None;continue
    if days==30 and style=='Title':
      if current:plans.append(current)
      current={'id':'','title':txt,'subtitle':'','days':30,'sourceFile':fname,'purpose':[],'closing':None,'lessons':[]}
      day=None;contextual_heading=None;continue
    if not current:raise ValueError('Found text before plan '+str((index,style,txt)))
    if style=='Subtitle': current['subtitle']=txt;continue
    m=re.match(r'^Day\s+(\d+)\s*[:—–-]\s*(.+)$',txt)
    if m:
      no=int(m.group(1));day={'id':'','day':no,'title':m.group(2),'primaryReading':'','keyVerse':{'text':'','reference':'','isExcerpt':False},'readingFocus':None,'devotionalThought':None,'reflectionQuestion':None,'prayerPrompt':None,'practicalStep':None}
      current['lessons'].append(day);active_field=None;contextual_heading=None;continue
    if not day:
      if style.startswith('Heading'):contextual_heading=txt
      elif days==7 and contextual_heading=='Purpose of This Plan':current['purpose'].append(txt)
      else: raise ValueError('unexpected prelesson content '+str((index,style,txt)))
      continue
    if days==7 and style.startswith('Heading') and not txt.startswith('Day '):
      current['closing']={'heading':txt,'paragraphs':[]};active_field='closing';continue
    if active_field=='closing' and current['closing']:
      current['closing']['paragraphs'].append(txt);continue
    if txt.startswith('Primary Reading:'):
      day['primaryReading']=norm(txt[len('Primary Reading:'):]);active_field='primaryReading'
      # 10-day original had primary and key on one paragraph but approved masters normalized
      continue
    if txt.startswith('Key Verse:'):
      verse,reference,is_excerpt=parse_keyverse(txt)
      day['keyVerse']={'text':verse,'reference':reference,'isExcerpt':is_excerpt};active_field='keyVerse'
      continue
    for label,key in [('Reading Focus:', 'readingFocus'),('Devotional Thought:','devotionalThought'),('Reflection Question:','reflectionQuestion'),('Prayer Prompt:','prayerPrompt'),('Practical Step:','practicalStep')]:
      if txt.startswith(label):
        day[key]=norm(txt[len(label):]);active_field=key;break
    else:
      # Extra normal paragraph: capture continuation if accidentally split.
      if active_field in ('readingFocus','devotionalThought','reflectionQuestion','prayerPrompt','practicalStep'):
        day[active_field] += ' '+txt
      else:raise ValueError('unexpected entry '+str((index,style,txt)))
  if current:plans.append(current)
  for plan in plans:
    plan['id']=f'{days}d-{slugify(plan["title"])}';plan['slug']=slugify(plan['title']);plan['lessonCount']=len(plan['lessons'])
    for item in plan['lessons']:
      item['id']=f'{plan["id"]}-day-{item["day"]:02d}'
      if not item['primaryReading'] or not item['keyVerse']['text'] or not item['keyVerse']['reference']:
        raise ValueError('missing required lesson '+str(item))
      if not(item['readingFocus'] or item['devotionalThought']):raise ValueError('missing core reflection '+str(item))
    nums=[x['day'] for x in plan['lessons']]
    assert nums==list(range(1,days+1)), (plan['title'],nums)
  return plans


def write_catalog(path, catalog):
  with path.open('w', encoding='utf-8') as out:
    def w(line): out.write(line + "\n")
    w('{')
    for key in ('schemaVersion', 'contentRevision', 'translation', 'planCount', 'lessonCount'):
      w('  '+json.dumps(key)+': '+json.dumps(catalog[key],ensure_ascii=False)+',')
    w('  "plans": [')
    for pi,plan in enumerate(catalog['plans']):
      w('    {')
      for k in ('id', 'slug', 'title', 'subtitle', 'days', 'sourceFile', 'purpose', 'closing', 'lessonCount'):
        w('      '+json.dumps(k)+': '+json.dumps(plan[k],ensure_ascii=False)+',')
      w('      "lessons": [')
      for di,day in enumerate(plan['lessons']):
        w('        '+json.dumps(day,ensure_ascii=False,separators=(',',':'))+(',' if di<len(plan['lessons'])-1 else ''))
      w('      ]')
      w('    }'+(',' if pi<len(catalog['plans'])-1 else ''))
    w('  ]')
    w('}')


def main():
  parser = argparse.ArgumentParser(description=__doc__)
  parser.add_argument('--seven', type=pathlib.Path, required=True, help='Approved 7-Day DOCX')
  parser.add_argument('--ten', type=pathlib.Path, required=True, help='Approved 10-Day DOCX')
  parser.add_argument('--thirty', type=pathlib.Path, required=True, help='Approved 30-Day DOCX')
  parser.add_argument('--output', type=pathlib.Path, required=True, help='Target content.json')
  parser.add_argument('--revision', default='approved-2026-10-12', help='Editorial approval revision')
  args = parser.parse_args()
  plans=[]
  for days, fname in [(7,args.seven),(10,args.ten),(30,args.thirty)]:
    plans += extract_one(days,fname)
  assert len(plans)==22
  assert collections.Counter(x['days'] for x in plans)=={7:6,10:10,30:6}
  assert len({x['id'] for x in plans})==22
  assert len({y['id'] for x in plans for y in x['lessons']})==322
  payload={'schemaVersion':1,'contentRevision':args.revision,'translation':'KJV','planCount':22,'lessonCount':322,'plans':plans}
  args.output.parent.mkdir(parents=True,exist_ok=True)
  write_catalog(args.output,payload)
  assert json.loads(args.output.read_text(encoding='utf-8'))==payload
  print(f'Exported {len(plans)} approved plans and 322 daily readings to {args.output}')

if __name__=='__main__':
  main()
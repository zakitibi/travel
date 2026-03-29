from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TRIPS_DIR = ROOT / "trips"
INDEX_FILE = ROOT / "index.html"

def prettify(name):
    return name.replace("-", " ").title()

trip_dirs = [p for p in TRIPS_DIR.iterdir() if p.is_dir()]

links = "\n".join(
    f'      <li><a href="trips/{t.name}/">{prettify(t.name)}</a></li>'
    for t in sorted(trip_dirs)
)

html = f"""<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Utazások</title>
</head>
<body>
  <h1>Utazások</h1>
  <ul>
{links}
  </ul>
</body>
</html>
"""

INDEX_FILE.write_text(html, encoding="utf-8")
print("index.html updated")
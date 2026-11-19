import urllib.request
import os
from PIL import Image

output_dir = 'public/images/blog'
os.makedirs(output_dir, exist_ok=True)

# Curated high-res architectural images with warm earthy/sand/minimalist tones
images = [
  {
    'name': 'blog-1',
    'url': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
    'topic': 'The Art of Architectural Space'
  },
  {
    'name': 'blog-2',
    'url': 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85',
    'topic': 'Designing with Natural Materials'
  },
  {
    'name': 'blog-3',
    'url': 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85',
    'topic': 'The Beauty of Organic Architecture'
  },
  {
    'name': 'blog-4',
    'url': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85',
    'topic': 'Understanding Light and Shadow'
  },
  {
    'name': 'blog-5',
    'url': 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85',
    'topic': 'A Thoughtful Approach to Sustainable Design'
  },
  {
    'name': 'blog-6',
    'url': 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85',
    'topic': 'The Influence of Texture in Architecture'
  }
]

headers = {'User-Agent': 'Mozilla/5.0'}

for item in images:
  jpg_path = os.path.join(output_dir, f"{item['name']}.jpg")
  webp_path = os.path.join(output_dir, f"{item['name']}.webp")

  req = urllib.request.Request(item['url'], headers=headers)
  with urllib.request.urlopen(req, timeout=15) as resp:
    data = resp.read()
    with open(jpg_path, 'wb') as f:
      f.write(data)

  img = Image.open(jpg_path)
  img.save(webp_path, 'WEBP', quality=88)
  print(f"Downloaded and converted {item['name']}: {img.size}")

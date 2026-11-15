const unsplash = (id: string, width = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;

export const images = {
  hero: unsplash("photo-1525310072745-f49212b5ac6d"),
  philosophy: unsplash("photo-1608571423902-eed4a5ad8108"),
  ancient: unsplash("photo-1522383225653-ed111181a951"),
  tcm: unsplash("photo-1564890369478-c89ca6d9cde9"),
  wellness: unsplash("photo-1544367567-0f2fcb009e0b"),
  seasonal: unsplash("photo-1470252649378-9c29740c9fa8"),
  about: unsplash("photo-1518531933037-91b2f5f229cc"),
  contact: unsplash("photo-1471943311424-646960669fbc"),
  easternHero: unsplash("photo-1522383225653-ed111181a951"),
  herbal: unsplash("photo-1505576399279-565b52d4ac71"),
  ritual: unsplash("photo-1416879595882-3373a0480b5b"),
  tools: unsplash("photo-1505576399279-565b52d4ac71"),
  skin: unsplash("photo-1469474968028-56623f02e42e"),
  rest: unsplash("photo-1506126613408-eca07ce68773"),
  forest: unsplash("photo-1441974231531-c6227db76b6e"),
  orchid: unsplash("photo-1525310072745-f49212b5ac6d"),
  spring: unsplash("photo-1464226184884-fa280b87c399"),
  summer: unsplash("photo-1501004318641-b39e6451bec6"),
  autumn: unsplash("photo-1507371341162-763b5e419408"),
  winter: unsplash("photo-1519681393784-d120267933ba"),
  food: unsplash("photo-1512621776951-a57141f2eefd"),
  tea: unsplash("photo-1564890369478-c89ca6d9cde9"),
  spaPortrait: unsplash("photo-1500382017468-9049fed747ef"),
  botanicals: unsplash("photo-1518531933037-91b2f5f229cc"),
} as const;

export const iconNames = [
  'abr',
  'subroutine',
  'mu3',
  'mu2',
  'mu1',
  'mu',
  'trash',
  'link-half-top',
  'link-half-bottom',
  'link',
  'click',
  'recurring-credit',
  'credit',
  'core',
  'genesis',
  'creation-and-control',
  'spin',
  'honor-and-profit',
  'lunar',
  'order-and-chaos',
  'sansan',
  'data-and-destiny',
  'mumbad',
  'flashpoint',
  'red-sand',
  'terminal-directive',
  'core2',
  'kitara',
  'reign-and-reverie',
  'magnum-opus',
  'sc19',
  'ashes',
  'magnum-opus-reprint',
  'interrupt',
  'salvaged-memories',
  'system-gateway',
  'system-update-2021',
  'borealis',
  'liberation',
  'elevation',
  'anarch',
  'criminal',
  'shaper',
  'jinteki',
  'haas-bioroid',
  'nbn',
  'weyland-consortium',
  'adam',
  'apex',
  'sunny-lebeau',
  'neutral-corp',
  'neutral-runner',
  'agenda-points'
];

// 无法匹配上的
const iconTitles = [
  'Pay',
  'rez',
  'score',
]

export const formatContent = (content) => {
  let contents = content
  contents = contents.replace(/&nbsp;/g, ' ');
  contents = contents.replace(/&amp;/g, '');
  iconNames.forEach(item => {
    const regex = new RegExp(`{${item}}`, 'g');
    contents = contents.replace(regex, `<i class="icon icon-${item}"></i>`);
  })
  return contents;
}
window.MathJax = {
  loader: {
    load: [
      '[tex]/ieeemacros',
      '[tex]/ieeelegacy',
      '[tex]/ieeestix',
      '[tex]/eulerieee',
      '[tex]/bbm',
      '[tex]/bboldx',
      '[tex]/boldsymbol',
      '[tex]/dsfont',
      '[tex]/upgreek',
      '[tex]/textmacros',
      '[tex]/textcomp',
      '[tex]/colortbl',
      '[tex]/mathtools',
      '[tex]/empheq',
      '[tex]/cases',
      '[tex]/centernot',
      '[tex]/gensymb',
      'ui/lazy',
    ],
    versionWarnings: false
  },
  tex: {
    inlineMath: [
      ['$','$'],      
      ['\\(','\\)']
    ],
    packages: {'[+]': [
      'ieeemacros',
      'ieeelegacy',
      'ieeestix',
      'eulerieee',
      'bbm',
      'bboldx',
      'boldsymbol',
      'dsfont',
      'upgreek',
      'textmacros',
      'textcomp',
      'colortbl',
      'mathtools',
      'empheq',
      'cases',
      'centernot',
      'gensymb',
    ]}
  },
  output: {
    font: 'mathjax-stix2',
  }
};

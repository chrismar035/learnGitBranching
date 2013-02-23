// Each level is part of a "sequence;" levels within
// a sequence proceed in the order listed here
exports.levelSequences = {
  intro: [
    require('../../levels/intro/1').level,
    require('../../levels/intro/2').level,
    require('../../levels/intro/3').level,
    require('../../levels/intro/4').level,
    require('../../levels/intro/5').level
  ],
  rebase: [
    require('../../levels/rebase/1').level,
    require('../../levels/rebase/2').level
  ],
  mixed: [
    require('../../levels/mixed/1').level,
    require('../../levels/mixed/2').level,
    require('../../levels/mixed/3').level
    require('../../levels/mixed/4').level
  ]
};

// there are also cute names and such for sequences
exports.sequenceInfo = {
  intro: {
    displayName: 'Introduction Sequence',
    about: 'A nicely paced introduction to the majority of git commands'
  },
  rebase: {
    displayName: 'Master the Rebase Luke!',
    about: 'What is this whole rebase hotness everyone is talking about? Find out!'
  },
  mixed: {
    displayName: 'A Mixed Bag',
    about: 'A mixed bag of Git techniques, tricks, and tips'
  }
};


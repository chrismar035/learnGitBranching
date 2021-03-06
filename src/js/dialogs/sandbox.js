exports.dialog = [{
  type: 'ModalAlert',
  options: {
    markdowns: [
      '## Welcome to LearnGitBranching!',
      '',
      'This application is designed to help beginners grasp ',
      'the powerful concepts behind branching when working ',
      'with git. We hope you enjoy this application and maybe ',
      'even learn something!',
      '',
      '# Demo!',
      '',
      'If you have not seen the demo, please check it out here:',
      '',
      '[http://pcottle.github.com/learnGitBranching/?demo](http://pcottle.github.com/learnGitBranching/?demo)',
      '',
      'Annoyed at this dialog? Append `?NODEMO` to the url to get rid of it, linked below for convenience:',
      '',
      '[http://pcottle.github.com/learnGitBranching/?NODEMO](http://pcottle.github.com/learnGitBranching/?NODEMO)'
    ]
  }
}, {
  type: 'ModalAlert',
  options: {
    markdowns: [
      '## Git commands',
      '',
      'You have a large variety of git commands available in sandbox mode. These include',
      '',
      ' * commit',
      ' * branch',
      ' * checkout',
      ' * cherry-pick',
      ' * reset',
      ' * revert',
      ' * rebase',
      ' * merge'
    ]
  }
}, {
  type: 'ModalAlert',
  options: {
    markdowns: [
      '## Sharing is caring!',
      '',
      'Share trees with your friends via `export tree` and `import tree`',
      '',
      'Have a great lesson to share? Try building a level with `build level` or try out a friend\'s level with `import level`',
      '',
      'For now let\'s get you started on the `levels`...'
    ]
  }
}];


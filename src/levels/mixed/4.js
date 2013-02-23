{
  "goalTreeString": "{\"branches\":{\"master\":{\"target\":\"C4\",\"id\":\"master\"},\"prod\":{\"target\":\"C3\",\"id\":\"prod\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C1\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C2\",\"C3\"],\"id\":\"C4\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}",
  "solutionCommand": "git checkout prod;git commit;git checkout master;git merge prod",
  "startTree": "{\"branches\":{\"master\":{\"target\":\"C2\",\"id\":\"master\"},\"prod\":{\"target\":\"C1\",\"id\":\"prod\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}",
  "name": "Hotfix",
  "hint": "",
  "startDialog": {
    "childViews": [
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "## Oh No!! Fires in prod!",
            "",
            "We've just discovered a shot stopping bug in production! Time to deploy a hotfix.",
            "",
            "Remember, that we need to get that fix back into master as well.",
            "",
            "You should apply the hotfix directly to the `prod` branch and then merge it back into master.",
            "",
            "Good luck!",
            "",
            ""
          ]
        }
      }
    ]
  }
}

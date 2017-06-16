# Contributing to FlatSquares
🖖 *"Dif tor heh smusma"* 🖖

Congratulations, you are going to contribute to the **FlatSquares** repository. 
First of all, we want to thank you for spending time to improve this project!

## Table Of Contents
[Introduction](#introduction)

[How to contribute](#how-to-contribute)
  * [Bugs](#bugs)
  * [Features](#features)
  * [Pull Requests](#pull-requests)

[Conventions](#conventions)
  * [Code](#code)
  * [Specification](#specification)
  * [Documentation](#documentation)

[Labels](#labels)

## <a id="introduction"></a>Introduction
The following guidelines ensure your contributions respect the **FlatSquares** engine philosophy, design, conventions and rules.

> ⚠️ Please don't create an issue for a question. It easier to directly contact the team on [Slack](https://flatsquares.slack.com), inside public channels (#public or #questions). We also are few developers in **FlatSquares** team, so please be patient to have an answer. Thanks for your understanding 🙏!

## <a id="how-to-contribute"></a>How to contribute

### <a id="bugs"></a>🐛 Bugs
Bug reports are one of the contributions you can do on **FlatSquares** engine. 

First, ensure your bug isn't listed in [issues](https://github.com/FlatSquares/FlatSquares/issues). It is preferable to contribute to an existing issue insead of created a new one. It's really important that you respect a specific format for your bug reports (format is available [here](doc/contributing/bug.md)). This provides an optimal reading for contributors and ease the implementations of fixes.

If a bug can be cover with an unit test, you are more than welcome to write it! It's one of the best way to quickly resolve the issue 👍

### <a id="features"></a>💡 Features
Features can add some new capabilities to the engine. 

First, ensure your feature isn't listed in [issues](https://github.com/FlatSquares/FlatSquares/issues). A feature needs to respect a specific format (format is available [here](doc/contributing/feature.md)).

A feature must be created as a proposal for discussion with the community. When an agreement is finded between community and **FlatSquares** team, the proposal is added as a feature inside a [project](). A features can be considered too large to be a task in a project. If so, **FlatSquares** team can decide to create the feature as project and split it into multiple small features (for an easier integration inside the FlatSquare engine).

### <a id="pull-requests"></a>🎁 Pull Requests
First, you need to take a look at [Conventions](#conventions) to ensure your code respect **FlatSquares** engine rules. These rules are mandatories to ensure each pull request respects the philosophy of the **FlatSquares** engine.

Currently team members use [Gitflow](http://nvie.com/posts/a-successful-git-branching-model/) as branching strategy. In consequence each pull requests must have a linked issue and a feature branch.

#### Clone
If you're an external contributor you need to fork the project first. Team members can directly clone **FlatSquares** organization repository.

Git command example:
```
$ git clone https://github.com/{origin}/FlatSquares
```

#### Authorship
All commits must be made with your personnal **Github** account (Take a look at Github documentation to set your user [name](https://help.github.com/articles/setting-your-username-in-git/) & [email](https://help.github.com/articles/setting-your-email-in-git/))

#### Branch
You must create a new branch before commit something. Feature branches must be created from "*develop*" branch.

> ⚠️ Team members recommand to clearly set the feature branch name. Use the issue title with **camelCase** naming convention or simply used the issue identifier prefix with "*issue*" (example: "*feature/vector*" or "*feature/issue3*").

Git command example:
```
$ git checkout -b feature/{featureNameOrIssueId} develop
```

#### Development
> 🚧 This section is a work in progress

To setup developement dependencies, execute "*install*" command of **npm**:
```
$ npm install
```

FlatSquares engine can direcly build with the "*start*" command of **npm**:
```
$ npm start
```

Unit tests are executed with the "*test*" command of **npm**:
```
$ npm test
```

> ⚠️ Always ensure build and test processes succeeded before commit some code inside the repository

#### Commit
Ensure each commit has an understandable message for request reviewers.

Git command example:
```
$ git commit -am"{message}"
```

#### Rebase
Each pull request must be synchronize with remote repository. FlatSquares team recommands to use an interactive rebase to synchronize local and remote repositories.

Git command example:
```
$ git fetch
$ git rebase -i origin/develop
```

External contributors have to synchronize local repository with the forked one (Take a look at the Github documentation [here](https://help.github.com/articles/syncing-a-fork/)).

#### Push
Git command example:
```
$ git push {origin} feature/{featureNameOrIssueId}
```

#### Github PR
Pull requests need to respect a specific format (format is available [here](doc/contributing/pr.md)).

When approved by reviewers, pull request are squashed into the "*develop*" branch.

> ⚠️ To be reviewed, build/test/ci processes must succeeded

## <a id="conventions"></a>Conventions
> 🚧 This section is a work in progress

### <a id="code"></a>⌨️ Code
Code conventions can be found [here](doc/contributing/code.md).

### <a id="specification"></a>🔬 Specification
- [Mocha](https://mochajs.org/) and [chai](http://chaijs.com/) are used to write specification.
- Treat *describe* as context of a feature.
- Treat *it* as an acceptance test.
- BDD style are allowed (Given/When/Then)

**Example**
```js
describe('As a developer, i want a Vector implementation', () => {
    let x: number, 
    let y: number
    let vector: Vector

    beforeEach(() => {
        this.x = Math.random();
        this.y = Math.random();
        this.vector = new Vector(this.x, this.y);
    });

    it('Vector can be rounded', () => {
        this.vector.round();
        expect(this.vector.x).to.be.equal(Math.round(this.x));
        expect(this.vector.y).to.be.equal(Math.round(this.y));
    });

    it('Vector length can be computed', () => {
        const expected: number = Math.sqrt(this.x * this.x + this.y * this.y);
        const actual: number = this.vector.length();

        expect(actual).to.be.equal(expected);
    });
});

``` 

### <a id="documentation"></a>📚 Documentation
- Use [JSDoc](http://usejsdoc.org/) for source code.
- Use [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for engine & repository documentation.

## <a id="labels"></a>Labels
| Name | Description | Color |
| --- | --- | --- |
| bug | Bug reports | ![#](https://placehold.it/15/e74c3c/000000?text=+) |
| enhancement | Feature to implement | ![#](https://placehold.it/15/3498db/000000?text=+) |
| proposal | Feature proposal | ![#](https://placehold.it/15/1abc9c/000000?text=+) |
| documentation | Documentation enhancement | ![#](https://placehold.it/15/ecf0f1/000000?text=+) |
| alm | Application lifecycle management improvment | ![#](https://placehold.it/15/e67e22/000000?text=+) |
| bad-format | Issue doesn't respect format | ![#](https://placehold.it/15/34495e/000000?text=+) |
| release-pending | Will be released in next version | ![#](https://placehold.it/15/2ecc71/000000?text=+) |
| duplicate | Duplicated issue | ![#](https://placehold.it/15/f1c40f/000000?text=+) |
| wontfix | Team decide to not resolve this issue | ![#](https://placehold.it/15/95a5a6/000000?text=+) |
| under-review | Issue/PR is under review | ![#](https://placehold.it/15/FFFFFF/000000?text=+) |
| information-needed | Issue need more information | ![#](https://placehold.it/15/9b59b6/000000?text=+) |
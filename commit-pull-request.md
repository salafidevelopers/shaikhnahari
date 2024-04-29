## Commit Message Guidelines

PR comments are not represented in the commit history.
Commits and their commit messages are the _"permanent record"_ of the changes being done in your PR and their commit messages should accurately describe both _what_ and _why_ it is being done.

Commit messages are comprised of two parts; the subject and the body.

The subject is the first line of the commit message and is often the only part
that is needed for small or trivial changes.
Those may be done as "one liners" with the `git commit -m` or the `--message` flag, but only if the what and especially why can be fully described in that few words.

The commit message body is the portion of text below the subject when you run
`git commit` without the `-m` flag which will open the commit message for editing
in your [preferred editor].
Typing a few further sentences of clarification is a useful investment in time both for your reviews and overall later project maintenance.

```
This is the commit message subject

Any text here is the commit message body
Some text
Some more text
...

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# On branch example
# Changes to be committed:
#   ...
#
```

Use these guidelines below to help craft a well formatted commit message.
These can be largely attributed to the previous work of [Chris Beams], [Tim Pope],
[Scott Chacon] and [Ben Straub].

- [Try to keep the subject line to 50 characters or less; do not exceed 72 characters](#try-to-keep-the-subject-line-to-50-characters-or-less-do-not-exceed-72-characters)
- [The first word in the commit message subject should be capitalized unless it starts with a lowercase symbol or other identifier](#the-first-word-in-the-commit-message-subject-should-be-capitalized-unless-it-starts-with-a-lowercase-symbol-or-other-identifier)
- [Do not end the commit message subject with a period](#do-not-end-the-commit-message-subject-with-a-period)
- [Use imperative mood in your commit message subject](#use-imperative-mood-in-your-commit-message-subject)
- [Add a single blank line before the commit message body](#add-a-single-blank-line-before-the-commit-message-body)
- [Wrap the commit message body at 72 characters](#wrap-the-commit-message-body-at-72-characters)
- [Do not use GitHub keywords or (@)mentions within your commit message](#do-not-use-github-keywords-or-mentions-within-your-commit-message)
- [Use the commit message body to explain the _what_ and _why_ of the commit](#use-the-commit-message-body-to-explain-the-what-and-why-of-the-commit)

<!-- omit in toc -->

### Try to keep the subject line to 50 characters or less; do not exceed 72 characters

The 50 character limit for the commit message subject line acts as a focus to
keep the message summary as concise as possible.
It should be just enough to describe what is being done.

The hard limit of 72 characters is to align with the max body size.
When viewing the history of a repository with `git log`, git will pad the body text with additional blank spaces.
Wrapping the width at 72 characters ensures the body text will be centered and easily viewable on an 80-column terminal.

<!-- omit in toc -->

#### Providing additional context

You can provide additional context with fewer characters by prefixing your commit message with the [kind] or [area] that your PR is impacting.
These are commonly used labels that other members of the Ataasil community will
understand.

**Examples:**

- `cleanup: remove unused portion of script foo`
- `deprecation: add notice for bar feature removal in future release`
- `Add: search for username in group view.`
- `Fix: dynamic field init method to show status.`
- `Chore: Small changes to text editor to enhance user experience.`
- `Fix: issue with login buttton not showing`
- `Chore: removed unsued code in utils`
- `Feat: Added simple about page sample to test nextjs routing`
- ` Refactor: move navbar into the _app file for general access on all pages`

These can serve as a good subject before expanding further on the what and why
within the commit message body.

<!-- omit in toc -->

### The first word in the commit message subject should be capitalized unless it starts with a lowercase symbol or other identifier

The commit message subject is like an abbreviated sentence.
The first word should be capitalized unless the message begins with symbol, acronym or other identifier such as [kind] or [area] that would regularly be lowercase.

<!-- omit in toc -->

### Do not end the commit message subject with a period

This is primary intended to serve as a space saving measure, but also aids in
driving the subject line to be as short and concise as possible.

## Use imperative mood in your commit message subject

Imperative mood just means “spoken or written as if giving a command or instruction”. A few examples:

- Clean your room
- Close the door
- Take out the trash

The imperative can sound a little rude; that’s why we don’t often use it. But it’s perfect for Git commit subject lines. One reason for this is that **Git itself uses the imperative whenever it creates a commit on your behalf.**

For example, the default message created when using git merge reads:

```
Merge branch 'myfeature'
```

And when using git revert:

```
Revert "Add the thing with the stuff"

This reverts commit cc87791524aedd593cff5a74532befe7ab69ce9d.
```

Or when clicking the “Merge” button on a GitHub pull request:

```
Merge pull request #123 from someuser/somebranch
```

So when you write your commit messages in the imperative, you’re following Git’s own built-in conventions. For example:

- Refactor subsystem X for readability
- Update getting started documentation
- Remove deprecated methods
- Release version 1.0.0

Other examples can be found in the **Some better examples of commit messsage section** below.

A properly formed Git commit subject line should always be able to complete the following sentence:

If applied, this commit will _your subject line here_
For example:

- If applied, this commit will _refactor subsystem X for readability_
- If applied, this commit will _update getting started documentation_
- If applied, this commit will _remove deprecated methods_
- If applied, this commit will _release version 1.0.0_
- If applied, this commit will _merge pull request #123 from user/branch_

Notice how this doesn’t work for the other non-imperative forms:

- If applied, this commit will _fixed bug with Y_
- If applied, this commit will _changing behavior of X_
- If applied, this commit will _more fixes for broken stuff_
- If applied, this commit will _sweet new API methods_

## Write Short, Detailed Commit Messages

When writing a commit message, start with a short summary of your change. Write your summary in present tense, limit the subject line to 50 characters, and always leave the second line blank.

Keep in mind that your team members will need to be able to read this message and understand exactly what you have done. Make sure that you provide enough detail to answer:

- What changed from the last version?
- How did it resolve the issue?
- Why did you make the change?

Some bad examples are:

- `Address workitem xxxyyy`.
- `Fixed a bug` – There is no reference to what bug has been fixed exactly, so it adds no value to the git history / logs. It will make reviewing previous commits extremely difficult, and painstaking. As a developer you would have to open each commit like this to understand what it's actually doing.
- `Refactored X and Y. Added files `– This message gives us no information about what was changed. We would have to hunt down the pull request to gather any context around the changes made, or again open up the commit.
- `refactored due to PR comments`
- Who broke this code?????
- `Fixing previous commit` – Lack of context again
- ` made tests pass` – Which test file was updated? You should at least give the name or area of tests that have been fixed.

## Make small, specific commits

Smaller commits make it easier to revert code to a previous state if there's a problem. If your commit affects too many areas, reverting back could mean losing a lot of code.

Some better examples include:

- `Add`: search for username in group view.
- `Fix`: dynamic field init method to show status.
- `Chore`: Small changes to text editor to enhance user experience.
- `Fix`: issue with login buttton not showing
- `Chore`: removed unsued code in utils
- `Feat`: Added simple about page sample to test nextjs routing
- ` Chore or Refactore: move navbar into the _app file for general access on all pages`

## Commit only related work

Do you know what S from SOLID stands for? Yeah, Single Responsibility Principle. You can apply this principle for commits, not only to the code. You should commit the least amount of lines that make sense together.

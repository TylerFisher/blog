---
title: How to setup your Mac for writing code in under one hour
date: 2022-03-07T19:26:35.587Z
description: We'll cover command line tools, language runtime management, git,
  text editors and more.
thumbnail: https://res.cloudinary.com/tylrfishr/image/upload/f_auto,q_auto/c_fill,w_1200/v1646713633/Screen-Shot-2022-03-03-at-5.58.22-PM_jtca18.png
leadImage:
  image: https://res.cloudinary.com/tylrfishr/image/upload/f_auto,q_auto/c_fill,w_1200/v1646713633/Screen-Shot-2022-03-03-at-5.58.22-PM_jtca18.png
  alt: A screenshot of a terminal prompt
  caption: Get you a terminal that looks like this!
category: Writing code
---
Over the past couple of months, I've had to set up multiple macOS computers for web development work. In the process, I've learned about a few tools that make the process much less painful than it used to be. So, in the spirit of the NPR Visuals Team's [immortal dev setup blog post](https://blog.apps.npr.org/2013/06/06/how-to-setup-a-developers-environment.html), I thought I'd share my process as it exists in early 2022.

This process takes me less than an hour to complete. No more wasting a whole day on setup!

## Prerequisites

Here's what I'm looking for in a development environment:

* **Command line tools**: The command line is the center of my system. I use the command line to run dev servers, interact with version control, open my text editor, and navigate around my filesystem. Thus, my development environment should emphasize command line tools whenever possible.
* **Language-agnostic**: Currently, I do my work in JavaScript/Node.js, with the occasional Python project along the way. My tooling is geared towards these languages, but as we'll see, my general setup is pretty language-agnostic. I might have to work on a PHP project or a Ruby project someday, and I don't want to have to change my whole setup when that happens.
* **No fuss**: I don't like configuring tools a bunch with third-party plugins and extensions. Inevitably, that stuff breaks at inconvenient times and makes my life more frustrating. The more I can use out-of-the-box, the better.
* **Speed rules**: All my tools should be fast. I can't stand lag when I work with programming tools. Code is plain text! We should be capable of working with plain text without hammering our processors.

## Step 0: Are you an administrator?

Depending on how you got the computer, or your employer's IT policies, it might be difficult to get administrator access to your machine. But it is essential to do this work. If your employer is procuring a computer for you, stress the importance of having this access as soon as you can.

To double-check whether your account is an administrator, open the System Preferences, then click on Users & Groups, and make sure your user has "admin" written below your name in the sidebar.

![](https://res.cloudinary.com/tylrfishr/image/upload/f_auto,q_auto/c_fill,w_1200/v1646714001/Screen_Shot_2022-03-03_at_1.01.11_AM_ln2znr.png)

## Step 1: Install iTerm2

The default Terminal that comes with macOS is fine. But the UI of iTerm2 is nicer and more customizable, so I prefer it.

You can download iTerm2 [here](https://iterm2.com/).

## Step 2: Install the command line tools

To do anything useful on the command line on macOS, you have to install the command line tools. Sometimes, macOS will prompt you for this as soon as you open a terminal. If not, run the following command and click through the system dialogs that follow:

```shell
xcode-select --install
```

This process will take 5-10 minutes.

## Step 3: Install Homebrew

Homebrew is the de facto package manager for macOS. It's where you install system software you'll use as a programmer. Install it with the following command:

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

After the process finishes, make sure you place Homebrew on your $PATH. (What is your $PATH? [This is a good primer](https://beautifulracket.com/setting-the-mac-os-path.html).) Homebrew will show you the two commands you need to run to do so at the bottom of the installation logs. They will look something like this:

```shell
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/<YOUR_USERNAME)>/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

If you copy from here, make sure to edit the <YOUR_USERNAME> string to your username on your Mac.

To double-check everything is working, run `brew doctor`.

## Step 4: Install asdf

So far, this process has been pretty standard. Here's where I stray from convention.

I primarily work with JavaScript and node.js, but sometimes I work in Python. It's not inconceivable that someday I'll need to work with other programming languages. For years, installing a new programming language meant learning a whole new set of developer tools for how to *properly* install a programming language and not blow up your whole environment. I'd use `pyenv` to manage Python installations, `n` to manage node.js installations, `rbenv` for Ruby, etc. They all had different APIs and interfaces, and managing them all was a pain.

Enter [asdf](https://asdf-vm.com/), which solves this problem neatly with a one-size-fits-all runtime management solution. It's easy to install. Use Homebrew:

```
brew install asdf
```

Then, run the following command to install it to your path:

```
echo -e "\n. $(brew --prefix asdf)/libexec/asdf.sh" >> ${ZDOTDIR:-~}/.zshrc
```

This installs the core software that manages all your runtimes. Then, you need to install plugins for the languages you care about. I know I said I try to avoid plugins, but it makes sense here. There are a lot of programming languages, and I don't need runtime management for all of them. Check [this repo](https://github.com/asdf-vm/asdf-plugins) for a list of plugins.

Here, I'll explain how to install the node.js plugin, but the process is roughly the same for any language.

First, install any dependencies for the plugin. The asdf docs say you need `gpg` and `gawk` for the node.js plugin, so install those with Homebrew:

```
brew install gpg gawk
```

Then, install the plugin:

```
asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git
```

Next, install the version of the language you want. Asdf exposes a `latest` option to get the latest version of the language, but with node.js, I use the long-term support (LTS) version. The node.js team maintains two versions of node.js at all times: the "current" version where they work on experimental new features, and the "LTS" version that is recommended for use in production. See [here](https://nodejs.org/en/about/releases/) for more information.

You can go to the [node.js homepage](https://nodejs.org/en/) to find the latest LTS version number. As of this writing, it's 16.14.0. Install the version like so:

```
asdf install nodejs 16.14.0
```

Finally, set your global version to the version you just installed:

```
asdf global nodejs 16.14.0
```

Repeat this process for all the languages you plan to use. I use [this plugin](https://github.com/danhper/asdf-python) for Python.

When you're done, make sure your runtimes are properly set up by checking their version and their location on your system. You should see something like this:

![](https://res.cloudinary.com/tylrfishr/image/upload/f_auto,q_auto/c_fill,w_1200/v1646714038/Screen_Shot_2022-03-03_at_1.09.20_AM_pfiz4n.png)

If you need to install different versions of your languages for legacy projects, it's as simple as running `asdf install <language> <version>`. You can set your active version globally, for the current session, or locally in your current folder. [Check the docs](https://asdf-vm.com/manage/versions.html#set-current-version) for more info.

## Step 5: Git setup and authenticating with Github

I use git for version control, and you should too. Apple used to ship an old version of git and it was recommended to install a newer version with Homebrew. These days, Apple is pretty close. My system git is version 2.30.1. Git is on 2.35.1 as of writing. You can upgrade if you want with `brew install git`, but I haven't needed to.

However, you will want to set up your git config. I adjust three settings: my name, my email, and my default branch name. To do so, run the following:

```
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
git config --global init.defaultBranch "main"
```

If using Github, make sure your email address matches an email you have attached to your Github account so that your commits are credited properly.

If you use Github to store your repositories remotely, you need to properly authenticate to push your code there. Recently, Github moved to a personal access token system for authentication. Rather than recreate their docs, you can read them [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token). Come back here after you've finished all the steps on that page. With that completed, you should be able to clone, pull from and push to any Github repository you have access to.

## Step 6: Install Visual Studio Code

Honestly, this is the part of my development environment I'm least excited about. I don't love Visual Studio Code. I find it does way too much, has cumbersome and unconventional keyboard shortcuts, and is pretty slow.

It seems like VSCode is built to do everything: terminals, version control, IDE-like features, and more. I'd rather it offered a speedy text editing interface, nice linting and autoformatting, and not much else.

Nevertheless, I'm using it, more out of inertia than anything. I'd love to be a cool vim guy, but I can't stick with it long enough to become truly productive with it, and setting it up is pure hell. If you're using a cool text editor that's fast and simple, [tell me about it](https://twitter.com/tylrfishr)!

Anyway, download [Visual Studio Code](https://code.visualstudio.com/) from the website. I try to limit the extensions I install, but I do install the recommended Python and ESLint extensions.

I also install the shell command by opening the command palette (`cmd+shift+p`) and searching for "Shell command". This allows you to open folders from the command line by using the `code` command. For example, to open your current directory in VSCode, you would run `code .`.

Finally, I change a few keyboard shortcuts. By default, VSCode uses `cmd+<number>` to split the editor into panes, rather than switching tabs like my web browser. This infuriates me to no end. Override that by opening the keyboard shortcuts editor (`cmd+k, cmd+s`). Then, search for "openEditorAtIndex". You will see options for opening at index (that is, tab) 1-9. Double click on each default shortcut and override it with `cmd+<index number>`.

## Some extras

You could stop right here. These are the barebones systems I use to get a proper development environment setup. But there's some extra stuff I install to make my life better.

### Python environment management

I put this in the extra section because I'm trying to keep this tutorial language-agnostic. But if you work in Python, don't skip this part.

Because working in Python is a house of cards, you need more tooling to ensure none of your tools ever talk to each other in the wrong way. I use two tools to ensure this doesn't happen.

First, I install [pipx](https://github.com/pypa/pipx). Pipx is a tool for installing global Python applications into their own environments. It's silly that we have to do this, but alas, we do. Install pipx with pip, because of course:

```
pip install --user pipx
```

Then, restart your terminal and run `python3 -m pipx ensurepath` to make sure you have the location where pipx installs applications on your $PATH.

Now that we have pipx, we can install [pipenv](https://pipenv.pypa.io/en/latest/) to ensure pip never installs our project dependencies globally. Confused yet? Me too.

```
pipx install pipenv
```

Now, whenever you're working on a Python project, you can use pipenv to automate the creation of virtual environments for each project. Thanks to pipx, your pipenv installation also won't get in the way of any other versions of Python you might need to install on your computer. At least, until Apple releases an update that breaks everyone's Python installations. *Deep, long sigh*.

### A nice color scheme

I stare at my terminal and text editor all day, so it's worth investing some time in making them look nice. I use the [Tokyo Night](https://github.com/enkia/tokyo-night-vscode-theme) color scheme for both iTerm2 and VSCode.

To install in iTerm2, download [this file](https://github.com/enkia/tokyo-night-vscode-theme/blob/master/tokyo-night.itermcolors). Then, open the iTerm2 preferences, click on Profiles in the top nav, then Colors in the subnav. Open the "Color Presets" menu and scroll down to import. Select the file you downloaded to your file system. Then, open the menu again and select `tokyo-night`.

To install in VSCode, open the command palette with `cmd+shift+p`. Then, type "Install Extension" and select the command. Search for Tokyo Night and install the theme.

### A nice terminal prompt

I like a clean, fast, informative terminal prompt. It used to take a lot of difficult configuration to get a good one, but I found [Starship](https://starship.rs) this time, and it is plug-and-play.

To make it work, you need what's called a "Nerd Font." This is a font that has been patched with a bunch of icons that will show up in your prompt, like the Python logo. You can download a Nerd Font [here](https://www.nerdfonts.com/font-downloads). I use [Iosevka](https://typeof.net/Iosevka/).

Once you have that downloaded, unzip the download file and open the folder. The folder has an unreasonable amount of font files to install, but macOS will figure it all out if you highlight them all and double click. This will install the font system-wide.

Then, open the iTerm2 preferences, click Profiles in the top nav, then Text in the subnav. Change the font to Iosevka Nerd Font Mono. You'll also want to bump up the font size, as Iosevka is pretty narrow.

After you've set up your terminal font, run the following command to install starship:

```
sh -c "$(curl -fsSL https://starship.rs/install.sh)"
```

Then, run the following command to ensure Starship runs every time you start a shell session.

```
echo -e '\n. eval "$(starship init zsh)"' >> ~/.zshrc
```

Restart your terminal, and you'll have a nice terminal prompt. Starship is [customizable](https://starship.rs/config/#prompt) if you're into that, but I find the default works great.

![](https://res.cloudinary.com/tylrfishr/image/upload/f_auto,q_auto/c_fill,w_1200/v1646714027/Screen_Shot_2022-03-03_at_1.04.32_AM_wmpiff.png)

## What else?

It used to take me most of a workday to set up a new dev environment. Today, I can do it in less than an hour. That's partially because I've done this a lot, but also because developer tooling has come a long way. Kudos to all the open-source maintainers who build this great developer tooling to make my life easier.

What am I missing? I'm on Twitter [@tylrfishr](https://twitter.com/tylrfishr). Give me a shout!
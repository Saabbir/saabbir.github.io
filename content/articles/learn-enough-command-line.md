---
title: Learn Enough Command Line
description: Learn enough command-line commands to work with unix and windows environments.
# featuredImg: async.webp
createdAt: 03/01/2021
tags:
- command-line
---

### Most used UNIX commands

<div class="c-table-responsive">
  <table class="c-table">
    <thead>
      <tr>
        <th>Command</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code class="inline">pwd</code></td>
        <td>Print working directory</td>
      </tr>
      <tr>
        <td><code class="inline">cd</code></td>
        <td>Change Directory <a href="https://www.computerhope.com/unix/ucd.htm">Learn more</a></td>
      </tr>
      <tr>
        <td><code class="inline">ls</code></td>
        <td>List files and folders</td>
      </tr>
      <tr>
        <td><code class="inline">clear</code></td>
        <td>Clear terminal</td>
      </tr>
      <tr>
        <td><code class="inline">mkdir</code></td>
        <td>Make directory</td>
      </tr>
      <tr>
        <td><code class="inline">touch</code></td>
        <td>Create a file</td>
      </tr>
    </tbody>
  </table>
</div>

### Summary of Terminal and UNIX Course from (Rithm School)

<div class="c-table-responsive">
  <table class="c-table">
    <!-- <caption>Summary of <a href="https://www.rithmschool.com/courses/terminal" target="_blank">Terminal and UNIX Course from (Rithm School)</a></caption> -->
    <thead>
      <tr>
        <th>Command</th>
        <th>Short for</th>
        <th>Use for</th>
      </tr>
    </thead>
    <tbody>
      <tr class="c-table__info-row">
        <td colspan="3">Checking Status</td>
      </tr>
      <tr>
        <td><code class="inline">whoami</code></td>
        <td>who am i</td>
        <td>To check who the current user is.</td>
      </tr>
      <tr>
        <td><code class="inline">pwd</code></td>
        <td>print working directory / present working directory</td>
        <td>Display current working directory in absolute path.</td>
      </tr>
      <tr class="c-table__info-row">
        <td colspan="3">Listing Files and Flags.</td>
      </tr>
      <tr>
        <td><code class="inline">ls</code></td>
        <td>list</td>
        <td>List information about the FILEs (the current directory by default). Sort entries alphabetically by default.
        </td>
      </tr>
      <tr>
        <td><code class="inline">ls --help</code></td>
        <td></td>
        <td>Pass <code class="inline">--help</code> option to any UNIX command to know details about this command.</td>
      </tr>
      <tr>
        <td><code class="inline">ls -l</code></td>
        <td></td>
        <td>Pass <code class="inline">-l</code> option to get a long listing format.</td>
      </tr>
      <tr>
        <td><code class="inline">ls -a</code></td>
        <td></td>
        <td>Pass <code class="inline">-a</code> or <code class="inline">--all</code> option to get all entries including
          hidden folders (starting with dot).</td>
      </tr>
      <tr>
        <td><code class="inline">ls -l -a</code></td>
        <td></td>
        <td>Pass both <code class="inline">-l</code> and <code class="inline">-a</code> option to get all entries
          including hidden folders (starting with dot) and a long listing format.</td>
      </tr>
      <tr>
        <td><code class="inline">ls -la</code></td>
        <td></td>
        <td>Pass both option combined (<code class="inline">-la</code>) to get all entries including hidden folders
          (starting with dot) and a long listing format.</td>
      </tr>
      <tr class="c-table__info-row">
        <td colspan="3">Moving Around / Navigating in Terminal</td>
      </tr>
      <tr>
        <td><code class="inline">cd</code></td>
        <td>change directory</td>
        <td></td>
      </tr>
      <tr>
        <td><code class="inline">cd ..</code></td>
        <td></td>
        <td>Move up one directory</td>
      </tr>
      <tr>
        <td><code class="inline">cd ../..</code></td>
        <td></td>
        <td>Move up two directory</td>
      </tr>
      <tr>
        <td><code class="inline">cd DIRECTORY_NAME</code></td>
        <td></td>
        <td>Move into one directory</td>
      </tr>
      <tr>
        <td><code class="inline">cd DIRECTORY_PATH</code></td>
        <td></td>
        <td>Move into a specific directory</td>
      </tr>
      <tr class="c-table__info-row">
        <td colspan="3">Creating Files And Folders</td>
      </tr>
      <tr>
        <td><code class="inline">mkdir</code></td>
        <td>make directory</td>
        <td></td>
      </tr>
      <tr>
        <td><code class="inline">mkdir FOLDER_NAME</code></td>
        <td></td>
        <td>Make one directory called FOLDER_NAME</td>
      </tr>
      <tr>
        <td><code class="inline">mkdir FOLDER_NAME1 FOLDER_NAME2</code></td>
        <td></td>
        <td>Make two directory called FOLDER_NAME1 and FOLDER_NAME 2</td>
      </tr>
      <tr>
        <td><code class="inline">touch FILENAME</code></td>
        <td></td>
        <td>Create a file named FILENAME</td>
      </tr>
      <tr>
        <td><code class="inline">touch FILENAME1 FILENAME2</code></td>
        <td></td>
        <td>Create two file named FILENAME1 and FILENAME2</td>
      </tr>
      <tr class="c-table__info-row">
        <td colspan="3">Displaying Contents Of A File</td>
      </tr>
      <tr>
        <td><code class="inline">cat</code></td>
        <td>concatenate</td>
        <td>Display contents of a file</td>
      </tr>
      <tr>
        <td><code class="inline">cat file.txt</code></td>
        <td></td>
        <td>Display contents of the file.txt</td>
      </tr>
      <tr>
        <td><code class="inline">less</code></td>
        <td></td>
        <td>Display contents of a file in a modal</td>
      </tr>
      <tr>
        <td><code class="inline">less file.txt</code></td>
        <td></td>
        <td>Display contents of the file.txt in a modal. Enter q to exit the modal</td>
      </tr>
      <tr>
        <td><code class="inline">echo</code></td>
        <td></td>
        <td>Writes text to the terminal</td>
      </tr>
      <tr>
        <td><code class="inline">echo "Hello World"</code></td>
        <td></td>
        <td>Writes Hello World to the terminal</td>
      </tr>
      <tr>
        <td><code class="inline">echo "Hello World" &gt; FILE_NAME</code></td>
        <td></td>
        <td>Writes Hello World to the FILE_NAME file</td>
      </tr>
      <tr class="c-table__info-row">
        <td colspan="3">Opening up a file</td>
      </tr>
      <tr>
        <td><code class="inline">open</code></td>
        <td>open a file or directory</td>
        <td>not found in windows</td>
      </tr>
      <tr>
        <td><code class="inline">start</code></td>
        <td>open a file or directory</td>
        <td>For Windows only</td>
      </tr>
      <tr>
        <td><code class="inline">start file.txt</code></td>
        <td></td>
        <td>Open file.txt in notepad</td>
      </tr>
      <tr>
        <td><code class="inline">start .</code></td>
        <td></td>
        <td>Open all the files and folder of the current directory into explorer</td>
      </tr>
      <tr class="c-table__info-row">
        <td colspan="3">Moving Files And Folders</td>
      </tr>
      <tr>
        <td><code class="inline">mv</code></td>
        <td>move</td>
        <td>Move files and folders</td>
      </tr>
      <tr>
        <td><code class="inline">mv file.txt folder/file.txt</code></td>
        <td></td>
        <td>Move file.txt to folder/file.txt</td>
      </tr>
      <tr>
        <td><code class="inline">mv file.txt rename.txt</code></td>
        <td></td>
        <td>Rename file.txt to rename.txt</td>
      </tr>
      <tr>
        <td><code class="inline">mv folder another_folder</code></td>
        <td></td>
        <td>Move folder to another folder</td>
      </tr>
      <tr class="c-table__info-row">
        <td colspan="3">Copying Files and Folders</td>
      </tr>
      <tr>
        <td><code class="inline">cp</code></td>
        <td>copy</td>
        <td>Copy files and folders</td>
      </tr>
      <tr>
        <td><code class="inline">cp file.txt file_copy.txt</code></td>
        <td></td>
        <td>Copy file.txt and call it file_copy.txt</td>
      </tr>
      <tr>
        <td><code class="inline">cp -r</code></td>
        <td>copy directory</td>
        <td></td>
      </tr>
      <tr>
        <td><code class="inline">cp -r folder folder_copy</code></td>
        <td></td>
        <td>Copy folder and call it folder_copy</td>
      </tr>
      <tr class="c-table__info-row">
        <td colspan="3">Deleting Files And Folders</td>
      </tr>
      <tr>
        <td><code class="inline">rm</code></td>
        <td>remove</td>
        <td></td>
      </tr>
      <tr>
        <td><code class="inline">rm file.txt</code></td>
        <td></td>
        <td>Remove a file</td>
      </tr>
      <tr>
        <td><code class="inline">rm -rf folder</code></td>
        <td></td>
        <td>Remove a directory</td>
      </tr>
      <tr>
        <td><code class="inline">rmdir</code></td>
        <td>remove directory</td>
        <td></td>
      </tr>
      <tr>
        <td><code class="inline">rmdir empty_directory</code></td>
        <td></td>
        <td>Remove an empty directory</td>
      </tr>
    </tbody>
  </table>
</div>

### Summary of learn enough command line to be dangerous

<div class="c-table-responsive">
  <table class="c-table">
    <!-- <caption>Summary of <a href="https://www.learnenough.com/command-line-tutorial" target="_blank">learn enough command line to be dangerous</a></caption> -->
    <thead>
      <tr>
        <th>Command</th>
        <th>Description</th>
        <th>Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code class="inline">echo [string]</code></td>
        <td>Print string to screen</td>
        <td><code class="inline">$ echo hello</code></td>
      </tr>
      <tr>
        <td><code class="inline">man [command]</code></td>
        <td>Display manual page for command</td>
        <td><code class="inline">$ man echo</code></td>
      </tr>
      <tr>
        <td><code class="inline">^C</code></td>
        <td>Get out of trouble</td>
        <td><code class="inline">$ echo 'hello
            &gt; ^C</code></td>
      </tr>
      <tr>
        <td><code class="inline">^A</code></td>
        <td>Move to beginning of line</td>
        <td>
          <!---->
        </td>
      </tr>
      <tr>
        <td><code class="inline">^E</code></td>
        <td>Move to end of line</td>
        <td>
          <!---->
        </td>
      </tr>
      <tr>
        <td><code class="inline">^U</code></td>
        <td>Delete to beginning of line</td>
        <td>
          <!---->
        </td>
      </tr>
      <tr>
        <td><code class="inline">Up &amp; down arrow</code></td>
        <td>Scroll through previous commands</td>
        <td>
          <!---->
        </td>
      </tr>
      <tr>
        <td><code class="inline">clear or ^L</code></td>
        <td>Clear screen</td>
        <td><code class="inline">$ clear</code></td>
      </tr>
      <tr>
        <td><code class="inline">exit or ^D</code></td>
        <td>Exit terminal</td>
        <td><code class="inline">$ exit</code></td>
      </tr>
      <tr>
        <td><code class="inline">&gt;</code></td>
        <td>$ echo foo &gt; foo.txt</td>
        <td><code class="inline">$ echo foo &gt; foo.txt</code></td>
      </tr>
      <tr>
        <td><code class="inline">&gt;&gt;</code></td>
        <td>Append output to filename</td>
        <td><code class="inline">$ echo bar &gt;&gt; foo.txt</code></td>
      </tr>
      <tr>
        <td><code class="inline">cat [file]</code></td>
        <td>Print contents of a file to the screen</td>
        <td><code class="inline">$ cat foo.txt</code></td>
      </tr>
      <tr>
        <td><code class="inline">diff [file1] [file2]</code></td>
        <td>Diff files 1 &amp; 2</td>
        <td><code class="inline">$ diff foo.txt bar.txt</code></td>
      </tr>
      <tr>
        <td><code class="inline">ls</code></td>
        <td>List directory or file</td>
        <td><code class="inline">$ ls hello.txt</code></td>
      </tr>
      <tr>
        <td><code class="inline">ls -l</code></td>
        <td>List long form</td>
        <td><code class="inline">$ ls -l hello.txt</code></td>
      </tr>
      <tr>
        <td><code class="inline">ls -rtl</code></td>
        <td>Long by reverse modification time</td>
        <td><code class="inline">$ ls -rtl</code></td>
      </tr>
      <tr>
        <td><code class="inline">ls -a</code></td>
        <td>List all (including hidden)</td>
        <td><code class="inline">$ ls -a</code></td>
      </tr>
      <tr>
        <td><code class="inline">touch [file]</code></td>
        <td>Create an empty file</td>
        <td><code class="inline">$ touch foo.txt</code></td>
      </tr>
      <tr>
        <td><code class="inline">mv [old] [new]</code></td>
        <td>Rename (move) from old to new</td>
        <td><code class="inline">$ mv foo.txt bar.txt</code></td>
      </tr>
      <tr>
        <td><code class="inline">cp [old] [new]</code></td>
        <td>Copy old to new</td>
        <td><code class="inline">$ cp old.txt new.txt</code></td>
      </tr>
      <tr>
        <td><code class="inline">rm [file]</code></td>
        <td>Remove (delete) file</td>
        <td><code class="inline">$ rm foo.txt</code></td>
      </tr>
      <tr>
        <td><code class="inline">rm -f [file]</code></td>
        <td>Force-remove file</td>
        <td><code class="inline">$ rm -f foo.txt</code></td>
      </tr>
      <tr>
        <td><code class="inline">curl</code></td>
        <td>Interact with URLs</td>
        <td><code class="inline">$ curl -O example.com</code></td>
      </tr>
      <tr>
        <td><code class="inline">which</code></td>
        <td>Locate a program on the path</td>
        <td><code class="inline">$ which curl</code></td>
      </tr>
      <tr>
        <td><code class="inline">head [file]</code></td>
        <td>Display first part of file</td>
        <td><code class="inline">$ head foo.txt</code></td>
      </tr>
      <tr>
        <td><code class="inline">tail [file]</code></td>
        <td>Display last part of file</td>
        <td><code class="inline">$ tail bar</code></td>
      </tr>
      <tr>
        <td><code class="inline">wc [file]</code></td>
        <td>Count lines, words, bytes</td>
        <td><code class="inline">$ wc foo.txt</code></td>
      </tr>
      <tr>
        <td><code class="inline">cmd1 | cmd2</code></td>
        <td>Pipe cmd1 to cmd2</td>
        <td><code class="inline">$ head foo.txt | wc</code></td>
      </tr>
      <tr>
        <td><code class="inline">ping [url]</code></td>
        <td>Ping a server URL</td>
        <td><code class="inline">$ ping google.com</code></td>
      </tr>
      <tr>
        <td><code class="inline">less [file]</code></td>
        <td>View file contents interactively</td>
        <td><code class="inline">$ less foo.txt</code></td>
      </tr>
      <tr>
        <td><code class="inline">grep [string] [file]</code></td>
        <td>Find string in file</td>
        <td><code class="inline">$ grep rose sonnets.txt</code></td>
      </tr>
      <tr>
        <td><code class="inline">grep -i [string] [file]</code></td>
        <td>Find case-insensitively</td>
        <td><code class="inline">$ grep -i rose sonnets.txt</code></td>
      </tr>
      <tr>
        <td><code class="inline">ps</code></td>
        <td>Show processes</td>
        <td><code class="inline">$ ps aux</code></td>
      </tr>
      <tr>
        <td><code class="inline">top</code></td>
        <td>Show processes (sorted)</td>
        <td><code class="inline">$ top</code></td>
      </tr>
      <tr>
        <td><code class="inline">kill -[level] [pid]</code></td>
        <td>Kill a process</td>
        <td><code class="inline">$ kill -15 24601</code></td>
      </tr>
      <tr>
        <td><code class="inline">pkill -[level] -f [name]</code></td>
        <td>Kill matching processes</td>
        <td><code class="inline">$ pkill -15 -f spring</code></td>
      </tr>
      <tr>
        <td><code class="inline">mkdir [name]</code></td>
        <td>Make directory with name</td>
        <td><code class="inline">$ mkdir foo</code></td>
      </tr>
      <tr>
        <td><code class="inline">pwd</code></td>
        <td>Print working directory</td>
        <td><code class="inline">$ pwd</code></td>
      </tr>
      <tr>
        <td><code class="inline">cd [dir]</code></td>
        <td>Change to dir</td>
        <td><code class="inline">$ cd foo</code></td>
      </tr>
      <tr>
        <td><code class="inline">cd ~/[dir]</code></td>
        <td>cd relative to home</td>
        <td><code class="inline">$ cd ~/foo</code></td>
      </tr>
      <tr>
        <td><code class="inline">cd</code></td>
        <td>Change to home directory</td>
        <td><code class="inline">$ cd</code></td>
      </tr>
      <tr>
        <td><code class="inline">cd -</code></td>
        <td>Change to previous directory</td>
        <td><code class="inline">$ cd &amp;&amp; pwd &amp;&amp; cd -</code></td>
      </tr>
      <tr>
        <td><code class="inline">.</code></td>
        <td>The current directory</td>
        <td><code class="inline">$ cp ~/foo.txt .</code></td>
      </tr>
      <tr>
        <td><code class="inline">..</code></td>
        <td>One directory up</td>
        <td><code class="inline">$ cd ..</code></td>
      </tr>
      <tr>
        <td><code class="inline">find</code></td>
        <td>Find files and directories</td>
        <td><code class="inline">$ find . -name foo.txt</code></td>
      </tr>
      <tr>
        <td><code class="inline">cp -r [old] [new]</code></td>
        <td>Copy recursively</td>
        <td><code class="inline">$ cp -r ~/foo .</code></td>
      </tr>
      <tr>
        <td><code class="inline">rmdir [dir]</code></td>
        <td>Remove (empty) dir</td>
        <td><code class="inline">$ rmdir foo/</code></td>
      </tr>
      <tr>
        <td><code class="inline">rm -rf [dir]</code></td>
        <td>Remove dir and contents</td>
        <td><code class="inline">$ rm -rf foo/</code></td>
      </tr>
      <tr>
        <td><code class="inline">grep -ri [string] [dir]</code></td>
        <td>Grep recursively (case-insensitive)</td>
        <td><code class="inline">$ grep -ri foo bar/</code></td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3">*** String inside [] (brackets) are variables.</td>
      </tr>
    </tfoot>
  </table>
</div>

### The most important less commands

<div class="c-table-responsive">
  <table class="c-table">
    <!-- <caption>The most important less commands</caption> -->
    <thead>
      <th>Command</th>
      <th>Description</th>
      <th>Example</th>
    </thead>
    <tbody>
      <tr>
        <td><code class="inline">up &amp; down arrow keys</code></td>
        <td>Move up or down one line</td>
        <td></td>
      </tr>
      <tr>
        <td><code class="inline">spacebar</code></td>
        <td>Move forward one page</td>
        <td></td>
      </tr>
      <tr>
        <td><code class="inline">f</code></td>
        <td>Move forward one page</td>
        <td></td>
      </tr>
      <tr>
        <td><code class="inline">b</code></td>
        <td>Move backward one page</td>
        <td></td>
      </tr>
      <tr>
        <td><code class="inline">G</code></td>
        <td>Move to end of file</td>
        <td></td>
      </tr>
      <tr>
        <td><code class="inline">1G</code></td>
        <td>Move to beginning of file</td>
        <td></td>
      </tr>
      <tr>
        <td><code class="inline">11G</code></td>
        <td>Move to the line number 11</td>
        <td></td>
      </tr>
      <tr>
        <td><code class="inline">/string</code></td>
        <td>Search file for string</td>
        <td><code class="inline">/rose</code></td>
      </tr>
      <tr>
        <td><code class="inline">n</code></td>
        <td>Move to next search result</td>
        <td></td>
      </tr>
      <tr>
        <td><code class="inline">N</code></td>
        <td>Move to previous search result</td>
        <td></td>
      </tr>
      <tr>
        <td><code class="inline">q</code></td>
        <td>Quit</td>
        <td></td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3">*** Case Sensitive</td>
      </tr>
      <tr>
        <td colspan="3">
          <a href="https://en.wikipedia.org/wiki/Less_(Unix)">Wikipedia page on less</a>
        </td>
      </tr>
    </tfoot>
  </table>
</div>

### References

- [Official GNU Manual](https://www.gnu.org/software/coreutils/manual/html_node/index.html)
- [List of Unix commands (Wikipedia page)](https://en.wikipedia.org/wiki/List_of_Unix_commands)
- [Overview of Unix and Linux commands (Computerhope)](https://www.computerhope.com/unix/overview.htm)
- [Unix and Linux Commands Help (Computerhope)](https://www.computerhope.com/unix.htm)
- [An A-Z Index of the Bash command line for Linux (ss64)](https://ss64.com/bash/)
- [The Ultimate A To Z List of Linux Commands (Fossbytes)](https://fossbytes.com/a-z-list-linux-command-line-reference/)
- [An A-Z Index of the Windows CMD command line (ss64)](https://ss64.com/nt/)
- [The Ultimate A to Z List Of Windows CMD Commands (Fossbytes)](https://fossbytes.com/complete-windows-cmd-commands-list-index/)

### Further Reading

- [What is Unix? (Indiana University)](https://kb.iu.edu/d/agat)
- [Introduction to Unix commands (Indiana University)](https://kb.iu.edu/d/afsk)
- [UNIX Tutorial for Beginners (University of Surrey)](http://www.ee.surrey.ac.uk/Teaching/Unix/)
- [Basic UNIX commands (Stanford University)](http://mally.stanford.edu/~sr/computing/basic-unix.html)
- [Linux Beginner Tutorials (Guru99)](https://www.guru99.com/introduction-linux.html)

### Recommened Books

- [Recommended UNIX Books (University of Surrey)](http://www.ee.surrey.ac.uk/Teaching/Unix/books-uk.html)

### Notes

- In the Git Bash on windows, <code class="inline">/</code> represents root directory.

- In the Command Prompt on windows, <code class="inline">C:\\&gt;</code> represents root directory.

- In the Git Bash on windows, <code class="inline">~</code> (tilde) represents home directory. Which is <code class="inline">/c/Users/Saabbir</code>.

- In the Command Prompt on windows, <code class="inline">C:\Users\Saabbir&gt;</code> represents home directory.

- In the Git Bash on windows, <code class="inline">cd /</code> (forwardslash) will take you to the root directory.

- In the Command Prompt on windows, <code class="inline">cd \\</code> (backslash) will take you to the root directory.

- In the command-line, control key (<code class="inline">Ctrl</code>) usually written as <code class="inline">^</code>.

- Combined keyboard shortcut like <code class="inline">Ctrl+C</code> doesn't have to be uppercase.

- Pressing up arrow key in the keyboard will get you the previous command you executed.

- To move around the command line we use <code>^A</code>, <code>^E</code>, <code>^U</code>.

### Keyboard Shortcuts

<div class="c-table-responsive">
  <table class="c-table">
    <!-- <caption>Keyboard Shortcuts</caption> -->
    <thead>
      <th>Shortcut</th>
      <th>Description</th>
    </thead>
    <tbody>
      <tr>
        <td><code class="inline">^A</code></td>
        <td>To get to the beginning of the line.</td>
      </tr>
      <tr>
        <td><code class="inline">^E</code></td>
        <td>To get to the end of the line.</td>
      </tr>
      <tr>
        <td><code class="inline">^U</code></td>
        <td>Clears to the beginning of the line and lets us start over.</td>
      </tr>
      <tr>
        <td><code class="inline">^C</code></td>
        <td>Get out of any trouble. Like terminal gets hang or not taking any command.</td>
      </tr>
      <tr>
        <td><code class="inline">^L</code></td>
        <td>To clear the screen. Similiar to the <code class="inline">clear</code> command.</td>
      </tr>
      <tr>
        <td><code class="inline">^D</code></td>
        <td>To exit the window. Similiar to the <code class="inline">exit</code> command.</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="2">*** In here, <code class="inline">^</code> key represents <code class="inline">Ctrl</code> key. Therefore, <code class="inline">^A</code> = <code class="inline">Ctrl+A</code></td>
      </tr>
    </tfoot>
  </table>
</div>

### Windows Command Prompt Commands

<div class="c-table-responsive">
  <table class="c-table">
    <!-- <caption>Windows Command Prompt Commands</caption> -->
    <thead>
      <tr>
        <th>Command</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code class="inline">dir</code></td>
        <td>To list all the files and folders in the current directory. Similiar to the <code class="inline">ls</code> UNIX command.</td>
      </tr>
      <tr>
        <td><code class="inline">cls</code></td>
        <td>Clear the current window by moving the cursor at the top. Similiar to the <code class="inline">clear</code> UNIX command.</td>
      </tr>
    </tbody>
  </table>
</div>
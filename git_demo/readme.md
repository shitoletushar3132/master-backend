1. 'git init' to initialize the git repository
2. when we remove .git file the not track on the repository

3. staging area => what all files are going to be part of the next version

4. `git add <files>` -> moves file from the working are to staging area

5. `git rm --cache -r <folder_name>` this can moves the files from staging area to the working area

6. `commit` -> commit is a particular version of the project. It captures a snapshot of the projects staged

7. `git log` -> check the all commits

8. `git restore <file>` -> it removes all files changes from the staging area to be committed. this can be useful, if we did some dirty code and now no want it. Instead of deleting every change line by line, we can restore it or you can say restore last clean version of the file

9. `git restore --stage <files>` it removes file from changes from staging area to the working area


10. if you wnat to move the file back to the untracked state, the we do git rm, otherwise if we just want the changes to be moved in working arae or staging area then do git restore

11. 
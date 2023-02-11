# turtle-react

To deploy on Github:
  >npm run build

  If you cant manipulate your files anymore, try this:
  >chown grit:grit -R /home/grit/Documents/Github/turtle-react
  
  Copy the build folder and paste somewhere else
  
  Open the terminal in the new build folder and setup the git repo
  >git remote set-url origin https://github.com/GUnzner/turtle-react.git
  
  Create a new branch
  >git branch gh-pages
  
  Choose the new branch
  >git checkout gh-pages
  
  Add the changes
  >git add .
  
  Commit them
  >git commit -m "Turtle web app deployment"
  
  Push your code to the repo branch gh-pages
  >git push or git push --set-upstream origin gh-pages

On the github repository page, go to settings>pages and:
-Select "deploy from a branch" > gh-pages > save 

Go to the tab Actions and you can see the process of deployment real time

The 404.html file is important to refresh react single application pages.

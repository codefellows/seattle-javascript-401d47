# LAB: Node Ecosystem, CI, CD

Time to get hands on with Node.js development! Today, you'll create and deploy a web server using CI and CD and get used to the general process of building and deploying servers, and prepping your work for grading

## The Setup

### Github

1. Create a new repository at GitHub, called `server-deployment-practice`
   - Select the "Add a README" option
   - Select the "Add a .gitignore" option, and choose Node.js
   - Opt for the MIT license
1. Clone this to your local machine.
1. Immediately create a "dev" branch to do your work in
   `git checkout -b dev`

### Heroku

At heroku, we're going to setup 2 deployments. One for your dev branch and one for your main branch. After you check in code on GitHub, you should then push to Heroku where code will automatically build and deploy, confirm deployment, and then merge with confidence!
 
1. Log into Heroku on the command line with the command `heroku login`.  
1. Create a new Heroku staging environment. 
  1. run the command `heroku create --remote staging -a yourname-server-deploy-dev`. 
  1. at this point, you've created your staging environment and can push code if you have a deployable proof of life.  If you do not, that's ok; do NOT push and wait to deploy until code is written.
  1. When ready, push the dev branch to your staging environment `git push staging dev:main`
  1. Let's dissect that command.  
     - `git push` we understand.  
     - the `staging` remote was created in the previous command with the `--remote` flag, giving us a reference point. 
     - To deploy code to Heroku from a non-main branch of your local repository (for example, dev), use the following syntax to push it to the remote’s main branch: `dev:main` 
     - once the command is run, our code has now been deployed to the staging remote on heroku
   1. Confirm Deployment
   1. Once Deployment is confirmed, the dev branch on GitHub can be merged with the confidence that the production branch will perform as expected.
1. After PR is Merged on GitHub, `git pull origin main` like normal.
1. Create a new Heroku production environment. 
  1. run the command `heroku create --remote production -a yourname-server-deploy-prod`.
  1. at this point, you've created your production environment and can push code if you have a deployable proof of life.  If you do not, that's ok; do NOT push and wait to deploy until code is written, vetted on the dev branch with tests and staging deployment, and merged to main.
  1. When ready, push the main branch to your production environment: `git push production main`
  1. Note the differences with the production push command compared to the staging deployment above.
    - `git push` is the same
    - `production`  points to our "production" remote
    - the code exists in the main branch after merge, so we can push directly from `main`
1. run the command `git remote -v` to see your remotes.  You'll see your origin, aka where your code lives on GitHub, and staging & production, aka where your code also lives at Heroku!

### The Code

You've been provided a working demo server by your instructor. Get this code working locally. Note that while you are permitted to simply copy the files, it's better if you create the server from scratch, typing the lines of code in the demo provide. Build up your muscle memory

1. Initialize your app -- `npm init -y`
1. Install your dependencies -- `npm install dotenv express jest`
1. Create the files and folders required for the application
1. Create the correct content in the files
1. Test your server -- `npm test`
   - You should see 100% of tests passing
1. Start your server -- `nodemon`
   - Visit <http://localhost:3000/data> in your browser to confirm that the server is visible

## Deploy!

Now that you have it all running, let's get it deployed.

### First: Deploy to Dev

1. Complete an **ACP** on your dev branch.
1. Go immediately to the repository on GitHub and open the actions tab
   - You should see your tests running
   - If they were passing on your local machine, they'll also pass here
1. Once your tests have passed, go to the command line and run the command: `git push staging dev:main`
1. When it completes, go to the Heroku app URL and open your server in the browser, you should see the same results as you saw locally.

### Second, go to production

Once your dev run has completed, you have successfully deployed your application with tests to an app on Heroku

Now, we're going to complete the "real" deployment process

1. Go to your repository on GitHub
1. Open a pull request from `dev` to `main`
1. If your tests are passing, you will be able to merge this branch
1. Once you merge, the tests will run again using GitHub actions
1. Once the tests pass, go to the command line and run the command: `git push production main`
1. When that process completes, open your app in the browser to prove it.

## Document your work

1. Open up the README.md file in your editor. It should contain the notes your instructor provided during their demo
1. Change the URLs to point to your Heroku applications, your Github actions, and your pull request
1. Add your drawings and notes
1. ACP this to your dev, then master

### Assignment Submission Instructions

In Canvas, submit a link to your completed `README.md` file from the `dev` branch.  Your grader will make any notes to you in the PR itself.

 Refer to the the [Submitting Standard Node.js Lab Submission Instructions](../../../reference/submission-instructions/labs/node-apps.md) for a review of the complete lab submission process and expectations

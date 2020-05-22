# Azure Static Web App demo

Basic demonstration of an Azure Static Web App using React.

For the frontend, I've used my ["minimal useful React PWA"](https://github.com/mikaelvesavuori/minimal-useful-react-pwa).

On the backend side, it's just the API example from [https://github.com/staticwebdev/vanilla-api](https://github.com/staticwebdev/vanilla-api).

## Setup

The below is how you'd use the code in this repo with Azure Static Web Apps.

1. Clone this repo with `git clone https://github.com/mikaelvesavuori/azure-static-web-app-demo.git` or whatever other way you prefer.
2. Inside the repo directory, remove the Git data with `rm -rf .git` (on Windows do whatever you need to remove the `.git` folder).
3. Now re-init Git with `git init` and add + commit + push the code to your own GitHub account.
4. Inside of the Azure console, search for "Static Web Apps" and click the choice presented.
5. Set all of the settings as you'd prefer to have them, and direct Azure to use the repo you just put on GitHub as the basis of the code.
6. When Azure has completed setting up your project, you should be able to see a URL (similar to `https://{UNIQUE_URL}.azurestaticapps.net/`)in the Overview of your app. Click it and your application should be visible!

## API

Once you've done the above, your API will be available at `https://{UNIQUE_URL}.azurestaticapps.net/api/message/`. The path is regulated from `api/GetMessage/function.json`.

## References

- [Microsoft: Routes in Azure Static Web Apps Preview](https://docs.microsoft.com/en-us/azure/static-web-apps/routes)
- [Microsoft: GitHub Actions workflows for Azure Static Web Apps Preview](https://docs.microsoft.com/sv-se/azure/static-web-apps/github-actions-workflow)

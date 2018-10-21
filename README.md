# IBM Cloud Static Web

Starter project for static websites. This repository helps you to deploy your web page (eg Landing Page) on IBM Cloud, using "SDK for Node.js" app - Cloud Foundry App.

<img src="https://www.ibm.com/cloud-computing/images/new-cloud/img/cloud.png" alt="IBM Cloud" width="25%">

## Where to add your website

It is required to install [cf cli](https://github.com/cloudfoundry/cli#downloads) or [bluemix cli](https://console.bluemix.net/docs/cli/reference/bluemix_cli/get_started.html#getting-started) to deploy your website. After that, follow these steps.

1. Clone this repository

```bash
git clone https://github.com/victorshinya/ibm-cloud-static-web.git
```

2. Access the project and open it

```bash
cd ibm-cloud-static-web
open .
```

3. There is a "public" folder inside the project. This is where **you will add your website (all files and folder)**.

**Now you will be able to deploy your app**.

## Deploy to IBM Cloud (Bluemix)

1. You need a IBM Cloud account. If you don't have one, [sign up](https://console.bluemix.net/registration/).

2. Download and install the [Cloud-foundry CLI](https://github.com/cloudfoundry/cli) tool if you haven't already.

3. Edit the `manifest.yml` file and change `<application-name>` to something unique. The name you use determines the URL of your application. For example, `<application-name>.mybluemix.net`.

```yaml
applications:
- path: .
  memory: 128M
  instances: 1
  domain: mybluemix.net
  name: <application-name>

```

4. Connect to IBM Cloud with the command line tool.

```sh
cf api https://api.ng.bluemix.net
cf login
```

5. **Optional:** Push the application to IBM Cloud:

```bash
cf push
```

After completing the steps above, you are ready to test your application. Start a browser and enter the URL of your application.

<your application name>.mybluemix.net

For more details about developing applications that use Watson Developer Cloud services in IBM Cloud, see [Getting started with Watson Developer Cloud and IBM Cloud](https://console.bluemix.net/docs/cfapps/index.html#creating_cloud_foundry_apps)
# ctrllfw-web

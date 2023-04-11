## Last working environment

Node.js = v14.21.1
Npm = 6.14.17

## Operating sytem configuration

Edition Windows 11 Home Single Language
Version 22H2
Installed on 21/09/2022
OS build 22621.819
Experience Windows Feature Experience Pack 1000.22636.1000.0

## Necessary tools to run this project

You may need Python 2.7.15 and Visual Studio Build Tools 2022 installed on Windows in order for this project to work. Check the following link for more details.

https://stackoverflow.com/questions/57879150/how-can-i-solve-error-gypgyp-errerr-find-vsfind-vs-msvs-version-not-set-from-c

## Note on using font-awesome icon in this project

1. First, go to https://fontawesome.com/v5/search?o=r&s=solid
2. Make sure you're on version 5 of font-awesome and selected solid icons only.
3. Choose an icon from here and copy it's name with `fa-` (i.e fa-external-link-alt). No need to copy `fas` part at the beginning.
4. Go to `nuxt.config.js` and register that icon to use in the vue component.
5. In the `fontawesome` settings, register the icon name as camelcase and remove any hyphen (i.e faExternalLinkAlt)
6. After that, you're ready to use that icon in your component using following syntax.

```html
<font-awesome-icon icon="external-link-alt" />
```

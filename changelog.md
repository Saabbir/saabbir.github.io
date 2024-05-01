# 02-May-24

- Added .yarn.rc file and set it's ignore-engines field true

It was necessary in order to get rid of GitHub actions error of fetching package mime.

The error:

error mime@4.0.3: The engine "node" is incompatible with this module. Expected version ">=16". Got "14.21.3"

#!/usr/bin/env bash

set -eo pipefail

cd `dirname $BASH_SOURCE`

npm run build
npm start


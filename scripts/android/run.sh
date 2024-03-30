#!/bin/bash

set -e
cur_dir=`dirname $0`

source $cur_dir/../utility.sh

setEnvFromFile $ENVFILE

echo "ENV is $ENV_NAME and target platform is ANDROID";

setAppDisplayName

echo "Running gradle clean"
cd android
./gradlew clean &&
cd ..

echo "Running app..."
react-native run-android

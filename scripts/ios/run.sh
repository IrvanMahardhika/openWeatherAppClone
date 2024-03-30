#!/bin/bash

set -e
cur_dir=`dirname $0`

source $cur_dir/../utility.sh

setEnvFromFile $ENVFILE

echo "ENV is $ENV_NAME and target platform is iOS";

./node_modules/react-native-config/ios/ReactNativeConfig/BuildXCConfig.rb ./ios/.. ./ios/tmp.xcconfig

echo "Cleaning cache"
cd ios && xcodebuild clean && cd ../

echo "Running app..."
react-native run-ios --scheme $IOS_SCHEME

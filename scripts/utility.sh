function readIfNotExist() {
    var=$1
    value=$2
    while [ -z "$value" ]; do
        read -p "Please Enter $var: " value
    done
    if [ "$value" == "--" ]; then
        echo "Using '' value for $1."
        value=""
    fi
    export $var=$value
}

function checkIfFileExists() {
    filetitle=$1
    filepath=$2
    while ! [ -f "$filepath" ]; do
        read -p "Invalid file path. Please Enter valid file path for $filetitle: " filepath
    done
    export $filetitle=$filepath
}

function setEnvFromFile() {
    ENVFILE=$1
    readIfNotExist ENVFILE $ENVFILE
    checkIfFileExists ENVFILE $ENVFILE
    echo "Setting the variables from $ENVFILE"
    set -o allexport
    source $ENVFILE
    set +o allexport
}

function setAppDisplayName() {
    echo "Setting app display name in app.json"

    mv app.json temp_app.json
    jq -r ".displayName |= \"$APP_DISPLAY_NAME\"" temp_app.json > app.json
    rm -rf temp_app.json

    echo "Successfully set app display name in app.json"
}
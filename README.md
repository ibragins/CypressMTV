# CypressMTV

##examples of usage:
export cypress_url="https://"$(oc get routes --all-namespaces|grep migration|grep ui|awk '{print $3}')

$(npm bin)/cypress run --env pass=$(cat /home/igor/cnv-qe.rhcloud.com/ibragins/auth/kubeadmin-password) --browser firefox --spec "cypress/integration/basicFlowTest.ts"


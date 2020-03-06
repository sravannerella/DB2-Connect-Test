const db = require('ibm_db');

// jdbc:as400://ASMCTEST.suzukihq.asmc.us/ASDAT1

console.log("ATTEMPTING CONNECTION....");

// const cs = "DSN=portaluser;PROTOCOL=TCPIP;HOSTNAME=asmctest.suzukihq.asmc.us;UID=portaluser;PWD=asportal41;PORT=50000";

const cs = "Driver={iSeries Access ODBC Driver};uid=showms3;system=ASMCtest;dbq=QGPL SHOWTARGET SIEBELSOAP;dftpkglib=QGPL;languageid=ENU;pkg=QGPL/DEFAULT(IBM),2,0,1,0,512;qrystglmt=-1;blocksize=2048"

db.open(cs, (err, connection) => {
    if(err) return console.log(err);
    console.log("COnnected")
});
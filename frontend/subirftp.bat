@echo off
echo user u556865521.futsal> ftpcmd.dat
echo Lowa.S3rv3r>> ftpcmd.dat
echo bin>> ftpcmd.dat
echo put build.rar>> ftpcmd.dat
echo quit>> ftpcmd.dat
ftp -n -s:ftpcmd.dat ftp.lowa.com.ar
del ftpcmd.dat
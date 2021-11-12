@echo off
echo user u556865521.ignacio> ftpcmd.dat
echo NachoLowa2021>> ftpcmd.dat
echo bin>> ftpcmd.dat
echo put build.rar>> ftpcmd.dat
echo quit>> ftpcmd.dat
ftp -n -s:ftpcmd.dat ftp.lowa.com.ar
del ftpcmd.dat
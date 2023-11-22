dotnet new : ex: dotnet new webapi -o WebApi

# macOS
- dotnet cli path
cd /usr/local/share/dotnet/ 
- Link to global PATH
ln -s /usr/local/share/dotnet/dotnet /usr/local/bin/

# windows
- dotnet cli path
cd C:\Program Files\dotnet
setx Path "%Path%;C:\Program Files\dotnet"


dotnet --version
dotnet restore : used to restore dependencies in <project>.csproj
dotnet build : used to build project, the out put is ...
dotnet new : ex: dotnet new webapi -o WebApi
dotnet build : dotnet build
dotnet build-server : 
dotnet run : run without hot reload when files changed
dotnet watch : work like nodemon
dotnet publish
dotnet pack


# stop dotnet process
killall -9 dotnet
Taskkill.exe /F /IM dotnet.exe /T


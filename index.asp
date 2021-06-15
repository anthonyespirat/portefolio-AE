<%EnableSessionState=False
host = Request.ServerVariables("HTTP_HOST")

if host = "eanthony.fr" or host = "www.eanthony.fr" then response.redirect("https://www.eanthony.fr/")

else
response.redirect("https://www.eanthony.fr.com/error.html")
end if
%>
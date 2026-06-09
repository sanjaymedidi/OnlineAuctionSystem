<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Admin Dashboard</title>
<style>
    body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0px;
        padding: 0;
    }

    h1 {
        color: #333;
        font-size: 2.5em;
        margin: 20px 0;
        background-color: blue;
    }

    center {
        margin-top: 50px;
    }

    label {
        font-size: 1.5em; /* Increased font size */
        color: #333;
    }

    a {
        text-decoration: none;
        color: #fff;
    }

    input[type="submit"] {
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 10px 2px;
        cursor: pointer;
        border-radius: 5px;
        transition: background-color 0.3s ease;
    }

    input[type="submit"]:hover {
        background-color: #45a049;
    }
</style>
</head>
<body>
<center>
<div class="admin">
<h1>Admin Dashboard</h1><br><br>
<label>Seller Details </label> <a href="SellerDetails.jsp"><input type="submit" value="Click"></a> <br>
<label>Buyer Details</label> <a href="BuyerDetails.jsp"><input type="submit" value="Click"></a>
</div>
</center>
</body>
</html>

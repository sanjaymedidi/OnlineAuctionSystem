<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seller Profile - Online Auction</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            text-align: center;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 50px auto;
            background: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
        	margin-top:30px;
        	margin-bottom:-20px;
            color: #333;
        }
        .auction-image {
            width: 100%;
            border-radius: 10px;
            margin-bottom: 20px;
        }
        .button-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 15px auto;
            max-width: 400px;
        }
        .label {
            font-size: 18px;
            font-weight: bold;
            flex: 1;
            text-align: left;
        }
        .btn {
            width: 120px;
            padding: 10px;
            font-size: 16px;
            color: #fff;
            background-color: #28a745;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            text-decoration: none;
            text-align: center;
        }
        .btn:hover {
            background-color: #218838;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Seller Profile</h1>
        <img class="auction-image" src="assets/img/bidding.png" alt="Auction Image" width="200px" height="350px">
        
        <div class="button-container">
            <label class="label">Add Products</label>
            <a href="addproduct.html" class="btn">Add</a>
        </div>
        <div class="button-container">
            <label class="label">See Your Products</label>
            <a href="viewproducts.html" class="btn">View</a>
        </div>
        <div class="button-container">
            <label class="label">Update Your Products</label>
            <a href="updateproduct.html" class="btn">Update</a>
        </div>
        <div class="button-container">
            <label class="label">Delete Your Products</label>
            <a href="deleteproduct.html" class="btn">Delete</a>
        </div>
    </div>
</body>
</html>

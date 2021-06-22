<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use Exception;

class ClientProductController extends Controller
{
    public function getProducts()
    {
        try {
            $products = Product::all();
            return response()->json($products, 200);
        } catch(Exception $e) {
            return response()->json(['message' => 'error']);
        }
    }

    // Tim kiem product theo category, brand, type, gender
    public function filterProducts(Request $request)
    {
        try {
            $products = Product::where($request->filter, $request->value)->get();
            return response()->json($products);
        } catch(Exception $e) {
            return response()->json(['message' => $e->getMessage()]);
        }
    }
}

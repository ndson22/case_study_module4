<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use Exception;
use Illuminate\Support\Facades\DB;

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

    public function getDetailProduct($productId){
        try{
            DB::beginTransaction();
            $product = Product::find($productId);
            DB::commit();
            return response()->json($product, 200);
        }catch(Exception $e){
            DB::rollBack();
            return response()->json(['message' => 'error']);
        }
    }
}

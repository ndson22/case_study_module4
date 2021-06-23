<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;
use App\Models\Brand;
use App\Models\Type;
use Illuminate\Support\Facades\DB;
use Exception;

class ClientProductController extends Controller
{
    public function getProducts()
    {
        try {
            $products = Product::all();
            $categories = Category::all();
            $brands = Brand::all();
            $types = Type::all();
            return response()->json([
                'products' => $products,
                'categories' => $categories,
                'brands' => $brands,
                'types' => $types
            ]);
        } catch(Exception $e) {
            return response()->json(['message' => 'error']);
        }
    }

    // Tim kiem product theo category, brand, type, gender
    public function filterProducts(Request $request)
    {
        try {
            $products = Product::where($request->filter, $request->value)->get();
            return response()->json(['products' => $products]);
        } catch(Exception $e) {
            return response()->json(['message' => $e->getMessage()]);
        }
    }

    public function getDetailProduct($productId)
    {
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

    public function sortByPrice(Request $request)
    {
        try {
            if ($request->minPrice) {
                $products = Product::where('price', '>=', $request->minPrice)->get();
            } else {
                $products = Product::where('price', ">=", $request->fromPrice)
                                    ->where('price', "<=", $request->toPrice)
                                    ->get();
            }
            return response()->json(['products' => $products]);
        } catch(Exception $e){
            return response()->json(['message' => $e->getMessage()]);
        }
    }
}

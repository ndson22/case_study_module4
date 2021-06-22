<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Requests\StoreProductRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Exception;

class ProductController extends Controller
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

    public function store(StoreProductRequest $request)
    {
        try {
            DB::beginTransaction();

            $product = new Product();
            $newImageName = time() . '-' . str_replace(' ', '', $request->name) . "." . $request->image->getClientOriginalExtension();
            $request->image->storeAs('public/images/products', $newImageName);
            $product->fill($request->all());
            $product->image = "images/products/" . $newImageName;
            $product->save();
            $product->sizes()->attach($request->size_id, ['amount' => $request->amount]);

            DB::commit();
            $products = Product::all();
            return response()->json($products);
        } catch(Exception $e) {
            DB::rollback();
            return response()->json(['message' => 'error']);
        }
    }

    public function update(StoreProductRequest $request, $productId)
    {
        try {
            DB::beginTransaction();

            $product = Product::find($productId);
            $product->fill($request->all());
            if ($request->hasFile('image')) {
                $request->validate([
                    'image' => 'required|image|file_extension:jpeg,png|mimes:jpeg,png|mimetypes:image/jpeg,image/png|max:2048'
                ]);
                Storage::delete('public/' . $product->image);
                $newImageName = time() . '-' . str_replace(' ', '', $request->name) . "." . $request->image->getClientOriginalExtension();
                $request->image->storeAs('public/images/products', $newImageName);
                $product->image = "images/products/" . $newImageName;
            }
            $product->save();
            $product->sizes()->sync($request->size_id, ['amount' => $request->amount]);

            DB::commit();
            $products = Product::all();
            return response()->json($products);
        } catch (Exception $e) {
            DB::rollback();
            return response()->json(['message' => 'error']);
        }
    }

    public function destroy($productId)
    {
        try {
            DB::beginTransaction();

            $product = Product::find($productId);
            $product->sizes()->detach();
            $product->delete();

            DB::commit();
            $products = Product::all();
            return response()->json($products);
        } catch (Exception $e) {
            DB::rollBack();
            return response()->json(['message' => 'error']);
        }
    }
}

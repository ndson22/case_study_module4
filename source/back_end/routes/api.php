<?php

use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::prefix('admin')->group(function () {
    Route::prefix('products')->group(function () {
        Route::get('/', [ProductController::class,'getProducts'])->name('product.getProducts');
        Route::post('/create', [ProductController::class,'store'])->name('product.create');
        Route::put('/{id}/edit', [ProductController::class,'update'])->name('product.update');
        Route::delete('/{id}/delete', [ProductController::class,'destroy'])->name('product.destroy');
    });
});


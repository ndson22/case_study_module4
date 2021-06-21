<?php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
// Route::prefix('product')->group(function () {
//     Route::get('/', [ProductController::class, 'index'])->name('product.index');
//     Route::get('/create', [ProductController::class, 'create'])->name('product.create');
//     Route::post('/create', [ProductController::class, 'store'])->name('product.store');
//     Route::get('/{id}/edit', [ProductController::class, 'edit'])->name('product.edit');
//     Route::post('/{id}/edit', [ProductController::class, 'update'])->name('product.update');
//     Route::get('/{id}/delete', [ProductController::class, 'delete'])->name('product.delete');
//     Route::post('/{id}/delete', [ProductController::class, 'destroy'])->name('product.destroy');
//     Route::get('/{id}/detail', [ProductController::class, 'detail'])->name('product.detail');
//     Route::get('/search', [ProductController::class, 'search'])->name('product.search');
//     Route::get('/filter', [ProductController::class, 'filterByCategory'])->name('product.filter');
// });

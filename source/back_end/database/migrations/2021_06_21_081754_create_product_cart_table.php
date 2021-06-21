<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductCartTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_cart', function (Blueprint $table) {
            $table->integer('product_id');
            $table->foreign('product_id')->references('id')->on('products');
            $table->integer('cart_id');
            $table->foreign('cart_id')->references('id')->on('carts');
            $table->float('quantity');
            $table->float('size_id');
            $table->float('price');
            $table->timestamps();
            $table->primary(['product_id', 'cart_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_cart');
    }
}

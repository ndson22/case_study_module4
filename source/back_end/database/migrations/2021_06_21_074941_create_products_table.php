<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->integer('id')->autoIncrement();
            $table->string('product_name'); 
            $table->float('price'); 
            $table->string('image'); 
            $table->string('description'); 
            $table->string('gender');
            $table->integer('type_id');
            $table->foreign('type_id')->references('id')->on('types');
            $table->integer('category_id');
            $table->foreign('category_id')->references('id')->on('categories');
            $table->integer('brand_id');
            $table->foreign('brand_id')->references('id')->on('brands');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}

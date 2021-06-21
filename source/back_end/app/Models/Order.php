<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Product;

class Order extends Model
{
    use HasFactory;

    protected $table = 'orders';

    protected $fillable = ['customer_id', 'status'];

    public function products()
    {
        return $this->belongsToMany(Product::class, 'id', 'id');
    }
}

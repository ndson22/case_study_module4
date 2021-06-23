<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Order;
use App\Models\Size;

class Product extends Model
{
    use HasFactory;

    protected $table = 'products';

    protected $fillable = ['product_name', 'price', 'description', 'gender', 'type_id', 'category_id', 'brand_id'];

    public function orders()
    {
        return $this->belongsToMany(Order::class, 'id', 'id');
    }

    public function sizes()
    {
        return $this->belongsToMany(Size::class)->withPivot('amount');
    }
}

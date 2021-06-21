<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Product;

class Size extends Model
{
    use HasFactory;

    protected $table = 'sizes';

    protected $fillable = ['size_value'];

    public function products()
    {
        return $this->belongsToMany(Product::class, 'id', 'id');
    }
}

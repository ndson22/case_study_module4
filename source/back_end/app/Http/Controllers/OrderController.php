<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Order;
use Exception;

class OrderController extends Controller
{
    public function getOrders()
    {
        $orders = Order::all();
        return response()->json($orders);
    }

    public function changeOrderStatus(Request $request, $orderId)
    {
        try {
            DB::beginTransaction();

            $order = Order::find($orderId);
            $order->status = $request->status;
            $order->save();

            DB::commit();
            $orders = Order::all();
            return response()->json($orders);
        } catch (Exception $e) {
            DB::rollback();
            return response()->json(['message' => 'error']);
        }
    }

    public function getOrderInfo($orderId)
    {
        try {
            $order = Order::find($orderId);
            return response()->json($order);
        } catch(Exception $e) {
            return response()->json(['message' => 'error']);
        }
    }


}

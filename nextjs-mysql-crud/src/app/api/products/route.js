import { NextResponse } from "next/server";

export function GET(){
  return NextResponse.json("Listado productos");
}

export function POST(){
  return NextResponse.json("creando producto");
}
from django.http import JsonResponse
from .models import Product, Category

PRODUCTS_FIELDS = ("id", "name", "price", "description", "count", "is_active", "category_id")
CATEGORY_FIELDS = ("id", "name")

def products_list(request):
    return JsonResponse(list(Product.objects.values(*PRODUCTS_FIELDS)), safe=False)

def product_detail(request, id):
    product = Product.objects.filter(id=id).values(*PRODUCTS_FIELDS).first()
    if product is None:
        return JsonResponse({"error": "Product not found"}, status=404)
    return JsonResponse(product)

def categories_list(request):
    return JsonResponse(list(Category.objects.values(*CATEGORY_FIELDS)), safe=False)

def category_detail(request, id):
    category = Category.objects.filter(id=id).values(*CATEGORY_FIELDS).first()
    if category is None:
        return JsonResponse({"error": "Category not found"}, status=404)
    return JsonResponse(category)

def category_products(request, id):
    if not Category.objects.filter(id=id).exists():
        return JsonResponse({"error": "Category not found"}, status=404)
    products = list(Product.objects.filter(category_id=id).values(*PRODUCTS_FIELDS))
    return JsonResponse(products, safe=False)
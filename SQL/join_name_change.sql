SELECT products.*,companies.name as company_name FROM products CROSS JOIN companies WHERE company_id=companies.id;

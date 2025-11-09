import { type FC, useState } from 'react';
import type { Sale } from '../../types';
import { Card, CardHeader, CardContent, CardFooter, Badge, Button } from '../ui';
import { CalendarIcon } from 'lucide-react';

interface SalesTableProps {
    sales: Sale[];
}

const ITEMS_PER_PAGE = 5;

export const SalesTable: FC<SalesTableProps> = ({ sales }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(sales.length / ITEMS_PER_PAGE);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const currentSales = sales.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    return (
        <Card className="overflow-hidden">
            <CardHeader className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900">Latest sales</h2>

                <div className="flex items-center space-x-4">
                    <div className="flex overflow-hidden rounded-lg">
                        <button className="px-3 py-1 font-semibold text-gray-900 bg-white shadow-lg rounded-md transform -translate-y-1 z-10">
                            Day
                        </button>
                        <button className="px-3 py-1 text-gray-700">Week</button>
                        <button className="px-3 py-1 text-gray-700">Month</button>
                    </div>

                    <CalendarIcon className="w-5 h-5 text-gray-600 cursor-pointer" />
                </div>
            </CardHeader>


            <CardContent className="p-0">
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border-spacing-0">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 tracking-wider">Product</th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 tracking-wider">Customer</th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 tracking-wider">Delivery</th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 tracking-wider">Status</th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 tracking-wider">Shipping</th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 tracking-wider">Total</th>
                            </tr>
                        </thead>

                        <tbody className="bg-white">
                            {currentSales.map((sale) => (
                                <tr key={sale.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center space-x-3">
                                            <img src={sale.image} alt={sale.product} className="w-12 h-12 rounded-xl object-cover" />
                                            <div>
                                                <div className="font-medium text-gray-900">{sale.product}</div>
                                                <div className="text-sm text-gray-500">{sale.productId}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-left">
                                        <div className="font-medium text-gray-900">{sale.customer}</div>
                                        <div className="text-sm text-gray-500">{sale.email}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-left">
                                        <div className="font-medium text-gray-900">{sale.delivery}</div>
                                        <div className="text-sm text-gray-500">{sale.address}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <Badge
                                            variant={
                                                sale.status === 'Shipped'
                                                    ? 'default'
                                                    : sale.status === 'Processing'
                                                        ? 'warning'
                                                        : 'error'
                                            }
                                        >
                                            {sale.status}
                                        </Badge>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-900 font-medium">
                                        ${Number(sale.shipping.replace('$', '')).toFixed(2)}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-900 font-bold">
                                        ${Number(sale.total.replace('$', '')).toFixed(2)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </CardContent>

            <CardFooter className="flex items-center justify-between">
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="bg-gray-100 px-4 py-2 hover:bg-gray-400 flex items-center space-x-1 rounded-sm"
                >
                    <span>&lt;</span>
                    <span>PREV</span>
                </Button>


                <div className="flex items-center space-x-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <Button
                            key={page}
                            variant={page === currentPage ? 'primary' : 'ghost'}
                            size="icon"
                            onClick={() => handlePageChange(page)}
                        >
                            {page}
                        </Button>
                    ))}
                </div>

                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === 1}
                    className="bg-gray-100 px-4 py-2 hover:bg-gray-400 flex items-center space-x-1 rounded-sm"
                >
                    <span>NEXT</span>
                    <span>&gt;</span>

                </Button>
            </CardFooter>
        </Card>
    );
};

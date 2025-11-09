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

             <CardContent className="p-0 flex-1 overflow-hidden flex flex-col">
                <div className="overflow-x-auto flex-1 flex flex-col">
                    <table className="w-full border-collapse border-spacing-0">
                        <thead className="bg-gray-50 sticky top-0 z-10">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 tracking-wider">Product</th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 tracking-wider">Customer</th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 tracking-wider">Delivery</th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 tracking-wider">Status</th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 tracking-wider">Shipping</th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 tracking-wider">Total</th>
                            </tr>
                        </thead>
                    </table>
                    
                    <div className="flex-1 overflow-y-auto">
                        <table className="w-full border-collapse border-spacing-0">
                            <tbody className="bg-white">
                                {currentSales.map((sale) => (
                                    <tr key={sale.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center space-x-3">
                                                <img src={sale.image} alt={sale.product} className="w-12 h-12 rounded-md object-cover" />
                                                <div className="flex flex-col space-x-3">
                                                    <div className="font-medium text-gray-900">{sale.product}</div>
                                                    <div className="text-sm text-gray-500 text-left">{sale.productId}</div>
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
                    <span className="text-xl font-bold mb-1">&lt;</span>
                    <span className='text-gray-900'>PREV</span>
                </Button>


                <div className="flex items-center space-x-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            className={`
        px-3 py-1 rounded
        ${page === currentPage ? 'bg-blue-200 text-blue-700' : 'bg-gray-100 text-black hover:bg-blue-100 hover:text-blue-800'}
      `}
                            onClick={() => handlePageChange(page)}
                        >
                            {page}
                        </button>
                    ))}
                </div>


                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === 1}
                    className="bg-gray-100 px-4 py-2 hover:bg-gray-400 flex items-center space-x-1 rounded-sm"
                >
                    <span className='text-gray-900'>NEXT</span>
                    <span className="text-xl font-bold mb-1">&gt;</span>

                </Button>
            </CardFooter>
        </Card>
    );
};

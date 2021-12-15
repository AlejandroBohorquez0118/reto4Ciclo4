/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.usa.ciclo4.ciclo4.Service;


import co.usa.ciclo4.ciclo4.Modelo.Order;
import co.usa.ciclo4.ciclo4.Repository.crud.OrderRepository;
import com.sun.org.apache.xerces.internal.impl.xpath.regex.REUtil;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author roll-
 */
@Service
public class OrderService {
    
     @Autowired
    private OrderRepository orderRepo;
    
    public List<Order> getAll(){
    
        return orderRepo.getAll();
        
    }
    
    public Order save(Order order){
        Optional<Order> orderExist=orderRepo.getOrderById(order.getId());
        
        if (orderExist.isEmpty()){
            
        return orderRepo.save(order);
        }
        else{
        return order;
        }
    }
    
    public Order update(Order order){
    
        if(order.getId() == null){
        
        return order;
        
        }else{
            Optional<Order> orderExist = orderRepo.getOrderById(order.getId());
            if(orderExist.isPresent()){
                if(order.getStatus() != null){
                
                orderExist.get().setStatus(order.getStatus());
                
                }
                return orderRepo.save(orderExist.get());
                }else{
                
                return order;
                
                }
                
                }
                
                }
        
        
        
        
    
    
    
    
    public Integer deleteOrder(Integer id){
    Optional<Order> orderExist = orderRepo.getOrderById(id);
        
        if(!orderExist.isEmpty() ){
            
        orderRepo.deleteOrder(id);
        return null;
        }
        else{
        return id;
        }
    }
    
    
    public Order getById(Integer id){
        
    Optional<Order> orderExist= orderRepo.getOrderById(id);
        if(orderExist.isPresent()){
        
        return orderExist.get();
        }
        else{
        
        return new Order();
        }
    }
    
    public List<Order> getZone(String country){
    
        return orderRepo.getZone(country);
    
    }
    
    public List<Order> getStatus(String zone){
    
        return orderRepo.getStatus(zone);
    
    }
    
    
    
    public List<Order> findBySalesManId(Integer id){
    
        return orderRepo.findBySalesManId(id);
    
    }

    public List<Order> getDate(String fecha, Integer id) throws ParseException{
        SimpleDateFormat dateDay = new SimpleDateFormat("yyyy-MM-dd");
        System.out.println(fecha);
        Date date = dateDay.parse(fecha);
        System.out.println(date);
        return orderRepo.getDate(date, id);
        
    }
    
    public List<Order> getStatusById(String status, Integer id){
    
        return orderRepo.getStatusById(status, id);
    
    }

}




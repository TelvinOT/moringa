function netSalCalc(basicSalary, benefits) {
    let NHIFDeductions, NSSFDeductions, grossSalary, netSalary, paye;
    grossSalary = basicSalary + benefits

    if (grossSalary <= 5999) {
        NHIFDeductions = 150
    } else {
        if (grossSalary <= 7999) {
            NHIFDeductions = 300
            
        } else {
            if (grossSalary <= 11999) {
                NHIFDeductions = 400
                
                
            } else {
              if (grossSalary <= 14999) {
                NHIFDeductions = 500
                
              } else {
                if (grossSalary <= 19999) {
                    NHIFDeductions = 600
                    
                } else {
                    if (grossSalary <= 24999) {
                        NHIFDeductions = 750
                        
                    } else {
                        if (grossSalary <= 29999) {
                            NHIFDeductions = 850
                            
                        } else {
                            if (grossSalary <= 34999) {
                                NHIFDeductions = 900
                                
                            } else {
                                if (grossSalary <= 39999) {
                                    NHIFDeductions = 950
                                    
                                } else {
                                    if (grossSalary <= 44999) {
                                        NHIFDeductions = 1000
                                        
                                    } else {
                                        if (grossSalary <= 49999) {
                                            NHIFDeductions = 1000
                                            
                                        } else {
                                            if (grossSalary <= 59999) {
                                                NHIFDeductions = 1200
                                                
                                            } else {
                                                if (grossSalary <= 69999) {
                                                    NHIFDeductions = 1300
                                                    
                                                } else {
                                                    if (grossSalary <= 79999) {
                                                        NHIFDeductions = 1400
                                                        
                                                    } else {
                                                        if (grossSalary <= 89999) {
                                                            NHIFDeductions = 1500
                                                            
                                                        } else {
                                                            if (grossSalary <= 99999) {
                                                                NHIFDeductions = 1600
                                                                
                                                            } else {
                                                                NHIFDeductions = 1700
                                                                
                                                                
                                                            }
                                                        }
                                                    }
                                                    
                                                }
                                            }
                                            
                                        }
                                        
                                    }
                                }
                            }
                        }
                    }
                }
              }  
            }
        }
    }
    if (grossSalary <= 24000) {
        paye = 10
    } else {
        if (grossSalary <= 32333) {
            paye = 25
        } else {
            paye = 30
    
}
        
    }

    if (grossSalary < 18000) {
        NSSFDeductions = 6/100 * grossSalary
    } else {
        NSSFDeductions = 2160
    }
    netSalary=grossSalary-NHIFDeductions-NSSFDeductions-paye
    return netSalary

}
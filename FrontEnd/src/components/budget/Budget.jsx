import React, { useState } from 'react';
import EnhancedTable from '../comp/table';
import BasicModal from '../comp/button_modal'
import BudgetCalculator from '../comp/table';
import Navbar from '../navbar/Navbar';

function TravelBudgetCalculator() {
  return (
    <div>
    <Navbar/>
    {/* <BasicModal/>
    <EnhancedTable/> */}
    <BudgetCalculator/>
    </div>
  );
}

export default TravelBudgetCalculator;